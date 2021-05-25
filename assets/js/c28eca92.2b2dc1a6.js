(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{327:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(8),a=(r(0),r(488)),c=r(489),i={title:"ProtocolStateV1"},l={unversionedId:"darknode-sol/Protocol/ProtocolStateV1",id:"darknode-sol/Protocol/ProtocolStateV1",isDocsHomePage:!1,title:"ProtocolStateV1",description:"Contract: ProtocolStateV1",source:"@site/contracts/darknode-sol/Protocol/ProtocolStateV1.mdx",slug:"/darknode-sol/Protocol/ProtocolStateV1",permalink:"/ren-client-docs/contracts/darknode-sol/Protocol/ProtocolStateV1",version:"current",sidebar:"contracts",previous:{title:"ProtocolLogicV1",permalink:"/ren-client-docs/contracts/darknode-sol/Protocol/ProtocolLogicV1"},next:{title:"DarknodeRegistryStore",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodeRegistry/DarknodeRegistryStore"}},d=[{value:"Contract: <code>ProtocolStateV1</code>",id:"contract-protocolstatev1",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>_darknodeRegistry</code></strong>: <em><code>contract DarknodeRegistryLogicV1</code></em>",id:"_darknoderegistry-contract-darknoderegistrylogicv1",children:[]},{value:"<strong><code>_gatewayRegistry</code></strong>: <em><code>contract GatewayRegistry</code></em>",id:"_gatewayregistry-contract-gatewayregistry",children:[]}]}],s={toc:d};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(o.default)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-protocolstatev1"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"ProtocolStateV1")),Object(a.mdx)("p",null,"ProtocolStateV1 stores the values used by Protocol as a\nseparate contract to reduce the risk of memory slots being moved."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"_darknoderegistry-contract-darknoderegistrylogicv1"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_darknodeRegistry")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"contract DarknodeRegistryLogicV1"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_gatewayregistry-contract-gatewayregistry"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_gatewayRegistry")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"contract GatewayRegistry"))),Object(a.mdx)("hr",null))}u.isMDXComponent=!0},488:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return s})),r.d(t,"MDXProvider",(function(){return m})),r.d(t,"mdx",(function(){return g})),r.d(t,"useMDXComponents",(function(){return p})),r.d(t,"withMDXComponents",(function(){return u}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.a.createElement(e,c({},t,{components:r}))}},p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=p(r),u=o,m=s["".concat(c,".").concat(u)]||s[u]||y[u]||a;return r?n.a.createElement(m,l(l({ref:t},i),{},{components:r})):n.a.createElement(m,l({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},489:function(e,t,r){"use strict";var o=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var n=o(r(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);