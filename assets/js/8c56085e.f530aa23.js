(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(487)),c=t(488),i={title:"RenProxyAdmin"},l={unversionedId:"darknode-sol/Governance/RenProxyAdmin",id:"darknode-sol/Governance/RenProxyAdmin",isDocsHomePage:!1,title:"RenProxyAdmin",description:"Contract: RenProxyAdmin",source:"@site/contracts/darknode-sol/Governance/RenProxyAdmin.mdx",slug:"/darknode-sol/Governance/RenProxyAdmin",permalink:"/ren-client-docs/contracts/darknode-sol/Governance/RenProxyAdmin",version:"current"},u=[{value:"Contract: <code>RenProxyAdmin</code>",id:"contract-renproxyadmin",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-renproxyadmin"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"RenProxyAdmin")),Object(a.mdx)("p",null,"Proxies restrict the proxy's owner from calling functions from the\ndelegate contract logic. The ProxyAdmin contract allows single account to be\nthe governance address of both the proxy and the delegate contract logic."),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ProxyAdmin")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"OpenZeppelinUpgradesOwnable"))),Object(a.mdx)("hr",null))}p.isMDXComponent=!0},487:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return f})),t.d(n,"mdx",(function(){return b})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return p}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){return function(n){var t=m(n.components);return o.a.createElement(e,c({},n,{components:t}))}},m=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=m(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,f=d["".concat(c,".").concat(p)]||d[p]||s[p]||a;return t?o.a.createElement(f,l(l({ref:n},i),{},{components:t})):o.a.createElement(f,l({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},488:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);