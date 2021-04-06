(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{294:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"Tag",(function(){return d})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(485)),c=t(486),i={id:"asset-amount-order-by",title:"AssetAmount_orderBy"},u={unversionedId:"subgraph/enums/asset-amount-order-by",id:"subgraph/enums/asset-amount-order-by",isDocsHomePage:!1,title:"AssetAmount_orderBy",description:"<span",source:"@site/subgraph/subgraph/enums/asset-amount-order-by.mdx",slug:"/subgraph/enums/asset-amount-order-by",permalink:"/ren-client-docs/subgraph/subgraph/enums/asset-amount-order-by",version:"current",sidebar:"subgraph",previous:{title:"subgraphId",permalink:"/ren-client-docs/subgraph/subgraph/directives/subgraph-id"},next:{title:"Asset_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/asset-order-by"}},s=[{value:"Values",id:"values",children:[]}],d=function(e){var n=e.children,t=e.color;return Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:s,Tag:d};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum AssetAmount_orderBy {\n  id\n  symbol\n  asset\n  amount\n  amountInEth\n  amountInUsd\n}\n")),Object(a.mdx)("h3",{id:"values"},"Values"),Object(a.mdx)("h4",{id:"id"},Object(a.mdx)("inlineCode",{parentName:"h4"},"id")),Object(a.mdx)("h4",{id:"symbol"},Object(a.mdx)("inlineCode",{parentName:"h4"},"symbol")),Object(a.mdx)("h4",{id:"asset"},Object(a.mdx)("inlineCode",{parentName:"h4"},"asset")),Object(a.mdx)("h4",{id:"amount"},Object(a.mdx)("inlineCode",{parentName:"h4"},"amount")),Object(a.mdx)("h4",{id:"amountineth"},Object(a.mdx)("inlineCode",{parentName:"h4"},"amountInEth")),Object(a.mdx)("h4",{id:"amountinusd"},Object(a.mdx)("inlineCode",{parentName:"h4"},"amountInUsd")))}l.isMDXComponent=!0},485:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return y})),t.d(n,"useMDXComponents",(function(){return l})),t.d(n,"withMDXComponents",(function(){return p}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){return function(n){var t=l(n.components);return o.a.createElement(e,c({},n,{components:t}))}},l=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||a;return t?o.a.createElement(m,u(u({ref:n},i),{},{components:t})):o.a.createElement(m,u({ref:n},i))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},486:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);