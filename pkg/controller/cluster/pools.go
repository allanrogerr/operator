// This file is part of MinIO Operator
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package cluster

import (
	miniov1 "github.com/minio/operator/pkg/apis/minio.min.io/v1"
	appsv1 "k8s.io/api/apps/v1"
	"k8s.io/apimachinery/pkg/api/equality"
	"k8s.io/klog/v2"
)

// poolSSMatchesSpec checks if the statefulset for the pool matches what is expected and described from the Tenant
func poolSSMatchesSpec(tenant *miniov1.Tenant, pool *miniov1.Pool, ss *appsv1.StatefulSet) (bool, error) {
	// Verify Resources
	updatePoolSS := false
	if pool.Resources.String() != ss.Spec.Template.Spec.Containers[0].Resources.String() {
		klog.V(4).Infof("resource requirements updates for pool %s", pool.Name)
		updatePoolSS = true
	}
	// Verify Affinity clauses
	if pool.Affinity.String() != ss.Spec.Template.Spec.Affinity.String() {
		klog.V(4).Infof("affinity update for pool %s", pool.Name)
		updatePoolSS = true
	}
	// Verify all sidecars
	if tenant.Spec.SideCars != nil {
		if len(ss.Spec.Template.Spec.Containers) != len(tenant.Spec.SideCars.Containers)+1 {
			klog.V(4).Infof("Side cars for pool %s don't match", pool.Name)
			updatePoolSS = true
		}
		// compare each container spec to the sidecars (shifted by one as container 0 is MinIO)
		for i := 1; i < len(ss.Spec.Template.Spec.Containers); i++ {
			if !equality.Semantic.DeepDerivative(ss.Spec.Template.Spec.Containers[i], tenant.Spec.SideCars.Containers[i-1]) {
				// container doesn't match
				updatePoolSS = true
				break
			}
		}
	}
	if tenant.Spec.SideCars == nil && len(ss.Spec.Template.Spec.Containers) > 1 {
		klog.V(4).Infof("Side cars  removed for pool %s", pool.Name)
		updatePoolSS = true
	}
	return updatePoolSS, nil
}