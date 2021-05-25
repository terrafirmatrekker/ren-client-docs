(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(488)),i=t(489),c={title:"Claimable"},l={unversionedId:"darknode-sol/Governance/Claimable",id:"darknode-sol/Governance/Claimable",isDocsHomePage:!1,title:"Claimable",description:"Contract: Claimable",source:"@site/contracts/darknode-sol/Governance/Claimable.mdx",slug:"/darknode-sol/Governance/Claimable",permalink:"/ren-client-docs/contracts/darknode-sol/Governance/Claimable",version:"current"},d=[{value:"Contract: <code>Claimable</code>",id:"contract-claimable",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>pendingOwner</code></strong>: <em><code>address</code></em>",id:"pendingowner-address",children:[]}]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyPendingOwner()</code>",id:"onlypendingowner",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(address _nextOwner)</code></em> (public)",id:"initialize-address-_nextowner-public",children:[]},{value:"<strong><code>transferOwnership</code></strong> <em><code>(address newOwner)</code></em> (public)",id:"transferownership-address-newowner-public",children:[]},{value:"<strong><code>claimOwnership</code></strong> <em><code>()</code></em> (public)",id:"claimownership--public",children:[]}]}],m={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-claimable"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"Claimable")),Object(a.mdx)("p",null,"Extension for the Ownable contract, where the ownership needs to be claimed.\nThis allows the new owner to accept the transfer."),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Context")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"pendingowner-address"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"pendingOwner")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"address"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"modifiers"},"Modifiers"),Object(a.mdx)("h3",{id:"onlypendingowner"},Object(a.mdx)("inlineCode",{parentName:"h3"},"onlyPendingOwner()")),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"initialize-address-_nextowner-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _nextOwner)"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"transferownership-address-newowner-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"transferOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address newOwner)"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"claimownership--public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"claimOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"()"))," (public)"),Object(a.mdx)("hr",null))}s.isMDXComponent=!0},488:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return m})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),s=function(e){return function(n){var t=p(n.components);return o.a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},O=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(t),s=r,u=m["".concat(i,".").concat(s)]||m[s]||b[s]||a;return t?o.a.createElement(u,l(l({ref:n},c),{},{components:t})):o.a.createElement(u,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=O;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},489:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const i={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);