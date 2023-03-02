"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[902],{75578:function(e,t,n){var i=n(1413),a=n(72791),l=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return(0,l.jsx)(a.Suspense,{fallback:t,children:(0,l.jsx)(e,(0,i.Z)({},n))})}return n}},74902:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i=n(29439),a=n(72791),l=n(78687),s=n(57482),r=n(61889),o=n(81207),c=n(75952),d=n(56087),x=n(4942),u=n(28182),f=n(18384),p=n(13967),m=n(64554),h=n(95193),b=n(78290),g=n(80184),j=function(e){var t=e.isActive,n=e.isXsViewActive,i=e.title,a=e.onClick,l=e.children,s=i.toLowerCase();return(0,g.jsx)(m.Z,{className:(0,u.Z)((0,x.Z)({"plan-header":!0,active:t},"xs-active",n)),onClick:function(){a&&a(s)},sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",borderLeft:"1px solid #eaeaea",borderBottom:"0px !important","& .plan-header":{display:"flex",alignItems:"center",justifyContent:"center",flexFlow:"column"},"& .title-block":{display:"flex",alignItems:"center",flexFlow:"column",width:"100%","& .title-main":{display:"flex",alignItems:"center",justifyContent:"center",flex:1},"& .iconContainer":{"& .min-icon":{minWidth:140,width:"100%",maxHeight:55,height:"100%"}}},"& .open-source":{fontSize:"14px",display:"flex",marginBottom:"5px",alignItems:"center","& .min-icon":{marginRight:"8px",height:"12px",width:"12px"}},"& .cur-plan-text":{fontSize:"12px",textTransform:"uppercase"},"@media (max-width: 600px)":{cursor:"pointer","& .title-block":{"& .title":{fontSize:"14px",fontWeight:600}}},"&.active, &.active.xs-active":{color:"#ffffff",position:"relative","& .min-icon":{fill:"#ffffff"},"&:before":{content:"' '",position:"absolute",width:"100%",height:"18px",backgroundColor:"#2781B0",display:"block",top:-16},"& .iconContainer":{"& .min-icon":{marginTop:"-12px"}}},"&.active":{background:"#2781B0",color:"#ffffff"},"&.xs-active":{background:"#eaeaea"}},children:l})},v=function(e){return(0,g.jsx)(m.Z,{className:"feature-title",children:(0,g.jsx)(m.Z,{className:"feature-title-info",children:(0,g.jsxs)("div",{className:"xs-only",children:[e.featureLabel," "]})})})},y=function(e){return(0,g.jsx)(m.Z,{className:"feature-item",style:e.style,children:(0,g.jsxs)(m.Z,{className:"feature-item-info",children:[(0,g.jsx)("div",{className:"xs-only",children:(0,b.BK)(e.featureLabel||"")}),(0,g.jsxs)(m.Z,{className:"plan-feature",children:[(0,g.jsx)("div",{children:(0,b.BK)(e.label||"")}),(0,b.BK)(e.detail),(0,g.jsxs)("div",{className:"xs-only",children:[e.xsLabel," "]})]})]})})},Z=function(e){var t,n=e.licenseInfo,l=e.operatorMode,s=(0,p.Z)(),r=(0,h.Z)(s.breakpoints.down("sm")),o=n?null===n||void 0===n||null===(t=n.plan)||void 0===t?void 0:t.toLowerCase():"community",d=o===b.a6.COMMUNITY,x=o===b.a6.STANDARD,u=o===b.a6.ENTERPRISE,Z=b.eo.includes(o),w=(0,a.useState)(""),N=(0,i.Z)(w,2),k=N[0],S=N[1],C=k===b.a6.COMMUNITY,L=k===b.a6.STANDARD,R=k===b.a6.ENTERPRISE,I=function(e,t,n,i){var a="community"!==o?"https://subnet.min.io":e;return(0,g.jsx)(c.zxk,{id:"license-action-".concat(e),variant:n,style:{marginTop:"12px",width:"80%"},disabled:o!==b.a6.COMMUNITY&&o!==i,onClick:function(e){e.preventDefault(),window.open("".concat(a,"?ref=").concat(l?"op":"con"),"_blank")},label:t})},T=function(e){S(e)};(0,a.useEffect)((function(){S(r?o||"community":"")}),[r,o]);var A="?ref=".concat(l?"op":"con"),M=b.Of;return(0,g.jsx)(a.Fragment,{children:(0,g.jsxs)(m.Z,{sx:{border:"1px solid #eaeaea",borderTop:"0px",marginBottom:"45px","&::-webkit-scrollbar":{width:"5px",height:"5px"},"&::-webkit-scrollbar-track":{background:"#F0F0F0",borderRadius:0,boxShadow:"inset 0px 0px 0px 0px #F0F0F0"},"&::-webkit-scrollbar-thumb":{background:"#777474",borderRadius:0},"&::-webkit-scrollbar-thumb:hover":{background:"#5A6375"}},children:[(0,g.jsx)(m.Z,{className:"title-blue-bar",sx:{height:"8px",borderBottom:"8px solid rgb(6 48 83)"}}),(0,g.jsxs)(m.Z,{className:Z?"paid-plans-only":"",sx:{display:"grid",margin:"0 1.5rem 0 1.5rem",gridTemplateColumns:{sm:"1fr 1fr 1fr 1fr",xs:"1fr 1fr 1fr"},"&.paid-plans-only":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},"& .features-col":{flex:1,minWidth:"260px","@media (max-width: 600px)":{display:"none"}},"& .xs-only":{display:"none"},"& .button-box":{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px 0px 25px 0px",borderLeft:"1px solid #eaeaea"},"& .plan-header":{height:"99px",borderBottom:"1px solid #eaeaea"},"& .feature-title":{height:"25px",paddingLeft:"26px",fontSize:"14px",background:"#E5E5E5","@media (max-width: 600px)":{"& .feature-title-info .xs-only":{display:"block"}}},"& .feature-name":{minHeight:"60px",padding:"5px",borderBottom:"1px solid #eaeaea",display:"flex",alignItems:"center",paddingLeft:"26px",fontSize:"14px"},"& .feature-item":{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",minHeight:"60px",padding:"0 15px 0 15px",borderBottom:"1px solid #eaeaea",borderLeft:" 1px solid #eaeaea",fontSize:"14px","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"&.icon-yes":{width:"15px",height:"15px"}},"& .feature-item-info":{flex:1,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-around",textAlign:"center","@media (max-width: 600px)":{justifyContent:"space-evenly",width:"100%","& .xs-only":{display:"block"},"& .plan-feature":{textAlign:"center",paddingRight:"10px"}}},"& .plan-col":{minWidth:"260px",flex:1},"& .active-plan-col":{background:"#FDFDFD 0% 0% no-repeat padding-box",boxShadow:" 0px 3px 20px #00000038","& .plan-header":{backgroundColor:"#2781B0"},"& .feature-title":{background:"#F7F7F7"}}},children:[(0,g.jsx)(m.Z,{className:"features-col",children:M.map((function(e){var t=e.featureTitleRow;return e.isHeader?Z?(0,g.jsxs)(m.Z,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"& .min-icon":{marginRight:"10px",color:"#2781B0",fill:"#2781B0"}},children:[(0,g.jsx)(c.jR_,{}),(0,g.jsxs)("a",{href:"https://subnet.min.io/terms-and-conditions/".concat(o),rel:"noopener",className:"link-text",children:["View License agreement ",(0,g.jsx)("br",{}),"for the registered plan."]})]},"plan-header-".concat(e.desc)):(0,g.jsx)(m.Z,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important"},children:e.label},"plan-header-label-".concat(e.desc)):t?(0,g.jsx)(m.Z,{className:"feature-title",sx:{fontSize:"14px",fontWeight:600,textTransform:"uppercase"},children:(0,g.jsxs)("div",{children:[(0,b.BK)(e.desc)," "]})},"plan-descript-".concat(e.desc)):(0,g.jsx)(m.Z,{className:"feature-name",style:e.style,children:(0,g.jsxs)("div",{children:[(0,b.BK)(e.desc)," "]})},"plan-feature-name-".concat(e.desc))}))}),Z?null:(0,g.jsxs)(m.Z,{className:"plan-col ".concat(d?"active-plan-col":"non-active-plan-col"),children:[b.RY.map((function(e,t){var n=M[t].desc,i=e.featureTitleRow;return e.isHeader?(0,g.jsx)(j,{isActive:d,isXsViewActive:C,title:"community",onClick:r?T:null,children:(0,g.jsx)(m.Z,{className:"title-block",children:(0,g.jsx)(m.Z,{className:"title-main",children:(0,g.jsx)("div",{className:"iconContainer",children:(0,g.jsx)(c.H_l,{style:{width:117}})})})})},"community-header"):i?(0,g.jsx)(v,{featureLabel:n},"title-row-".concat(e.id)):(0,g.jsx)(y,{featureLabel:n,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"pricing-feature-".concat(e.id))})),(0,g.jsx)(m.Z,{className:"button-box",children:I("https://slack.min.io".concat(A),"Join Slack","regular",b.a6.COMMUNITY)})]}),(0,g.jsxs)(m.Z,{className:"plan-col ".concat(x?"active-plan-col":"non-active-plan-col"),children:[b.zR.map((function(e,t){var n=M[t].desc,i=e.featureTitleRow;return e.isHeader?(0,g.jsx)(j,{isActive:x,isXsViewActive:L,title:"Standard",onClick:r?T:null,children:(0,g.jsx)(m.Z,{className:"title-block",children:(0,g.jsx)(m.Z,{className:"title-main",children:(0,g.jsx)("div",{className:"iconContainer",children:(0,g.jsx)(c.tKS,{})})})})},"standard-header"):i?(0,g.jsx)(v,{featureLabel:n},"feature-title-row-".concat(e.id)):(0,g.jsx)(y,{featureLabel:n,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"feature-item-".concat(e.id))})),(0,g.jsx)(m.Z,{className:"button-box",children:I("https://min.io/signup".concat(A),b.eo.includes(o)?"Login to SUBNET":"Subscribe","callAction",b.a6.STANDARD)})]}),(0,g.jsxs)(m.Z,{className:"plan-col ".concat(u?"active-plan-col":"non-active-plan-col"),children:[b.u9.map((function(e,t){var n=M[t].desc,i=e.featureTitleRow,a=e.isHeader,l=e.yesIcon;return a?(0,g.jsx)(j,{isActive:u,isXsViewActive:R,title:"Enterprise",onClick:r?T:null,children:(0,g.jsx)(m.Z,{className:"title-block",children:(0,g.jsx)(m.Z,{className:"title-main",children:(0,g.jsx)("div",{className:"iconContainer",children:(0,g.jsx)(c.cSV,{})})})})},"enterprise-header"):i?(0,g.jsx)(v,{featureLabel:n},"feature-title-row2-".concat(e.id)):l?(0,g.jsx)(m.Z,{className:"feature-item",children:(0,g.jsxs)(m.Z,{className:"feature-item-info",children:[(0,g.jsx)("div",{className:"xs-only"}),(0,g.jsx)(m.Z,{className:"plan-feature",children:(0,g.jsx)(f.Z,{})})]})},"ent-feature-yes".concat(e.id)):(0,g.jsx)(y,{featureLabel:n,label:e.label,detail:e.detail,style:e.style},"pricing-feature-item-".concat(e.id))})),(0,g.jsx)(m.Z,{className:"button-box",children:I("https://min.io/signup".concat(A),b.eo.includes(o)?"Login to SUBNET":"Subscribe","callAction",b.a6.ENTERPRISE)})]})]})]})})},w=n(57689),N=n(74794),k=n(74440),S=n(87995),C=n(75578),L=n(47974),R=(0,C.Z)(a.lazy((function(){return n.e(223).then(n.bind(n,75223))}))),I=function(){var e=(0,w.s0)(),t=(0,l.v9)(S.bf),n=(0,a.useState)(!1),x=(0,i.Z)(n,2),u=x[0],f=x[1],p=(0,a.useState)(),m=(0,i.Z)(p,2),h=m[0],j=m[1],v=(0,a.useState)(0),y=(0,i.Z)(v,2),C=y[0],I=y[1],T=(0,a.useState)(!1),A=(0,i.Z)(T,2),M=A[0],B=A[1],E=(0,a.useState)(!0),F=(0,i.Z)(E,2),z=F[0],D=F[1];(0,a.useState)(!1);var P=(0,a.useState)(!1),W=(0,i.Z)(P,2),H=W[0],O=W[1],U=(0,a.useState)(!1),K=(0,i.Z)(U,2),V=K[0],Y=K[1],_=h&&H,X=(0,b.Y0)();(0,a.useEffect)((function(){!_&&!X&&!z&&!M&&Y(!0)}),[_,X,z,M]);var G=(0,a.useCallback)((function(){M||(B(!0),o.Z.invoke("GET","/api/v1/subnet/info").then((function(e){e&&("STANDARD"===e.plan?I(1):"ENTERPRISE"===e.plan?I(2):I(1),j(e)),O(!0),B(!1)})).catch((function(){O(!1),B(!1)})))}),[M]);return(0,a.useEffect)((function(){z&&(G(),D(!1))}),[G,z,D]),M?(0,g.jsx)(r.ZP,{item:!0,xs:12,children:(0,g.jsx)(s.Z,{})}):(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(L.Z,{label:"MinIO License and Support plans",actions:(0,g.jsx)(a.Fragment,{children:!_&&(0,g.jsx)(c.zxk,{id:"login-with-subnet",onClick:function(){return e(d.gA.REGISTER_SUPPORT)},style:{fontSize:"14px",display:"flex",alignItems:"center",textDecoration:"none"},icon:(0,g.jsx)(c.e0j,{}),variant:"callAction",children:"Register your cluster"})})}),(0,g.jsxs)(N.Z,{children:[(0,g.jsx)(r.ZP,{item:!0,xs:12,children:_&&(0,g.jsx)(k.Z,{email:null===h||void 0===h?void 0:h.email})}),(0,g.jsx)(Z,{activateProductModal:u,closeModalAndFetchLicenseInfo:function(){f(!1),G()},licenseInfo:h,operatorMode:t,currentPlanID:C,setActivateProductModal:f}),(0,g.jsx)(R,{isOpen:V,onClose:function(){Y(!1)}})]})]})}},74440:function(e,t,n){n(72791);var i=n(64554),a=n(75952),l=n(80184);t.Z=function(e){var t=e.email,n=void 0===t?"":t;return(0,l.jsxs)(i.Z,{sx:{height:"67px",color:"#ffffff",display:"flex",position:"relative",top:"-30px",left:"-32px",width:"calc(100% + 64px)",alignItems:"center",justifyContent:"space-between",backgroundColor:"#2781B0",padding:"0 25px 0 25px","& .registered-box, .reg-badge-box":{display:"flex",alignItems:"center",justifyContent:"flex-start"},"& .reg-badge-box":{marginLeft:"20px","& .min-icon":{fill:"#2781B0"}}},children:[(0,l.jsxs)(i.Z,{className:"registered-box",children:[(0,l.jsx)(i.Z,{sx:{fontSize:"16px",fontWeight:400},children:"Register status:"}),(0,l.jsxs)(i.Z,{className:"reg-badge-box",children:[(0,l.jsx)(a.SA,{}),(0,l.jsx)(i.Z,{sx:{fontWeight:600},children:"Registered"})]})]}),(0,l.jsxs)(i.Z,{className:"registered-acc-box",sx:{alignItems:"center",justifyContent:"flex-start",display:{sm:"flex",xs:"none"}},children:[(0,l.jsx)(i.Z,{sx:{fontSize:"16px",fontWeight:400},children:"Registered to:"}),(0,l.jsx)(i.Z,{sx:{marginLeft:"8px",fontWeight:600},children:n})]})]})}},18384:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(45649)),l=n(80184),s=(0,a.default)((0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.Z=s},95193:function(e,t,n){var i;n.d(t,{Z:function(){return u}});var a=n(29439),l=n(72791),s=n(69120),r=n(31537),o=n(40162);function c(e,t,n,i,s){var r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=l.useState((function(){return s&&r?n(e).matches:i?i(e).matches:t})),d=(0,a.Z)(c,2),x=d[0],u=d[1];return(0,o.Z)((function(){var t=!0;if(r){var i=n(e),a=function(){t&&u(i.matches)};return a(),i.addListener(a),function(){t=!1,i.removeListener(a)}}}),[e,n,r]),x}var d=(i||(i=n.t(l,2))).useSyncExternalStore;function x(e,t,n,i){var s=l.useCallback((function(){return t}),[t]),r=l.useMemo((function(){if(null!==i){var t=i(e).matches;return function(){return t}}return s}),[s,e,i]),o=l.useMemo((function(){if(null===n)return[s,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[s,n,e]),c=(0,a.Z)(o,2),x=c[0],u=c[1];return d(u,x,r)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,s.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,r.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),l=a.defaultMatches,o=void 0!==l&&l,u=a.matchMedia,f=void 0===u?i?window.matchMedia:null:u,p=a.ssrMatchMedia,m=void 0===p?null:p,h=a.noSsr;var b="function"===typeof e?e(n):e;b=b.replace(/^@media( ?)/m,"");var g=void 0!==d?x:c,j=g(b,o,f,m,h);return j}}}]);
//# sourceMappingURL=902.8f103652.chunk.js.map