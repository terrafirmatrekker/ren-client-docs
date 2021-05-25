(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{488:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.a.createElement(e,c({},t,{components:n}))}},s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?a.a.createElement(m,u(u({ref:t},i),{},{components:n})):a.a.createElement(m,u({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},489:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(488)),c=n(489),i={title:"IBurnGateway"},u={unversionedId:"gateway-sol/Gateway/interfaces/IBurnGateway",id:"gateway-sol/Gateway/interfaces/IBurnGateway",isDocsHomePage:!1,title:"IBurnGateway",description:"Contract: IBurnGateway",source:"@site/contracts/gateway-sol/Gateway/interfaces/IBurnGateway.mdx",slug:"/gateway-sol/Gateway/interfaces/IBurnGateway",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/interfaces/IBurnGateway",version:"current"},l=[{value:"Contract: <code>IBurnGateway</code>",id:"contract-iburngateway",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>burn</code></strong> <em><code>(bytes _to, uint256 _amountScaled) \u2192 uint256</code></em> (external)",id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external",children:[]},{value:"<strong><code>burnFee</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"burnfee--\u2192-uint256-external",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-iburngateway"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"IBurnGateway")),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes _to, uint256 _amountScaled) \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"burnfee--\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burnFee"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null))}p.isMDXComponent=!0}}]);