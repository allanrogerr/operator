"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[112],{9505:function(e,n,t){var a=t(29439),c=t(72791),o=t(81207);n.Z=function(e,n){var t=(0,c.useState)(!1),i=(0,a.Z)(t,2),r=i[0],s=i[1];return[r,function(t,a,c,i){s(!0),o.Z.invoke(t,a,c,i).then((function(n){s(!1),e(n)})).catch((function(e){s(!1),n(e)}))}]}},32112:function(e,n,t){t.r(n);var a=t(29439),c=t(72791),o=t(51691),i=t(21435),r=t(61889),s=t(9505),u=t(40306),l=t(75952),f=t(87995),p=t(1261),d=t(80184);n.default=function(e){var n=e.deleteOpen,t=e.selectedPVC,h=e.closeDeleteModalAndRefresh,m=(0,p.TL)(),C=(0,c.useState)(""),v=(0,a.Z)(C,2),Z=v[0],x=v[1],b=(0,s.Z)((function(){return h(!0)}),(function(e){return m((0,f.Ih)(e))})),P=(0,a.Z)(b,2),j=P[0],k=P[1];return(0,d.jsx)(u.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(l.NvT,{}),isLoading:j,onConfirm:function(){Z===t.name?k("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pvc/").concat(t.name)):m((0,f.Ih)({errorMessage:"PVC name is incorrect",detailedError:""}))},onClose:function(){return h(!1)},confirmButtonProps:{disabled:Z!==t.name||j},confirmationContent:(0,d.jsxs)(o.Z,{children:["To continue please type ",(0,d.jsx)("b",{children:t.name})," in the box.",(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){x(e.target.value)},label:"",value:Z})})]})})}}}]);
//# sourceMappingURL=112.c512d225.chunk.js.map