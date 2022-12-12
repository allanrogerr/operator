#!/usr/bin/env bash
# Copyright (C) 2022, MinIO, Inc.
#
# This code is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License, version 3,
# as published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License, version 3,
# along with this program.  If not, see <http://www.gnu.org/licenses/>

# This script requires: kubectl, kind

SCRIPT_DIR=$(dirname "$0")

export SCRIPT_DIR

source "${SCRIPT_DIR}/common.sh"

lower_version="$1"
upper_version="$2"
namespace=tenant-lite
tenant=storage-lite
bucket=data
dummy=dummy.data
localport=9000
totalwait=0
alias=minios3

# Preparing tenant for bucket manipulation
function bootstrap_tenant() {
  echo 'Validating tenant pods are ready to serve'
  for pod in `kubectl --namespace $namespace --selector=v1.min.io/tenant=$tenant get pod -o json |  jq '.items[] | select(.metadata.name|contains("'$tenant'"))| .metadata.name' | sed 's/"//g'`; do
    while true; do
      if kubectl --namespace $namespace logs pod/$pod | grep --quiet 'All MinIO sub-systems initialized successfully'; then
        echo "$pod is ready to serve" && break
      fi
      sleep 5
      totalwait=$((totalwait + 5))
      if [ "$totalwait" -gt 305 ]; then
        echo "Unable to validate pods after 5 minutes, exiting."
        try false
      fi
    done
  done

  echo "Killing any current port-forward"
  for pid in $(lsof -i :$localport | awk {'print $2'} | grep -o "\d*")
  do
    if [ -n "$pid" ] 
    then
      kill -9 $pid
      echo "Killed previous port-forward process using port $localport: $pid"
    fi
  done

  echo "Establishing port-forward"
  kubectl port-forward service/$tenant-hl -n $namespace $localport:$localport &

  # Obtain root credentials
  TENANT_CONFIG_SECRET=$(kubectl -n $namespace get tenants $tenant -o jsonpath="{.spec.configuration.name}")
  USER=$(kubectl -n $namespace get secrets "$TENANT_CONFIG_SECRET" -o go-template='{{index .data "config.env"|base64decode }}' | grep 'export MINIO_ROOT_USER="' | sed -e 's/export MINIO_ROOT_USER="//g' | sed -e 's/"//g')
  PASSWORD=$(kubectl -n $namespace get secrets "$TENANT_CONFIG_SECRET" -o go-template='{{index .data "config.env"|base64decode }}' | grep 'export MINIO_ROOT_PASSWORD="' | sed -e 's/export MINIO_ROOT_PASSWORD="//g' | sed -e 's/"//g')

  echo "Creating alias with user ${USER}"
  mc alias set $alias https://localhost:$localport ${USER} ${PASSWORD} --insecure

  echo "Creating bucket on tenant"
  mc mb $alias/$bucket --insecure
}

# Upload dummy data to tenant bucket
function upload_dummy_data() {
  echo "Uploading dummy data to tenant bucket"
  cp ${SCRIPT_DIR}/deploy-tenant-upgrade.sh ${SCRIPT_DIR}/$dummy
  mc cp ${SCRIPT_DIR}/$dummy minio/data/$dummy --insecure
}

# Download dummy data from tenant bucket
function download_dummy_data() {
  echo "Download dummy data from tenant bucket"
  mc cp $alias/$bucket/$dummy ${SCRIPT_DIR}/$dummy --insecure

  if cmp -s "${SCRIPT_DIR}/deploy-tenant-upgrade.sh" "${SCRIPT_DIR}/$dummy"; then
    echo "Operator upgrade test complete; no issue found"
  else
    echo "Operator upgrade test failed"
    try false
  fi
}

function main() {
  destroy_kind

  setup_kind

  if [ -n $lower_version ]
  then
    # Test specific version of operator
    install_operator_version $lower_version
  else
    # Test latest release
    install_operator_version
  fi

  install_tenant

  bootstrap_tenant

  upload_dummy_data

  if [ -n $higher_version ]
  then
    # Test specific version of operator
    install_operator_version $higher_version
  else
    # Test current branch
    install_operator
  fi
  
  check_tenant_status tenant-lite storage-lite

  download_dummy_data

  destroy_kind
}

main "$@"
