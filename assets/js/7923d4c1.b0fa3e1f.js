(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(485)),i=r(486),c={id:"assets",title:"assets"},s={unversionedId:"subgraph/subscriptions/assets",id:"subgraph/subscriptions/assets",isDocsHomePage:!1,title:"assets",description:"<span",source:"@site/subgraph/subgraph/subscriptions/assets.mdx",slug:"/subgraph/subscriptions/assets",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/assets",version:"current",sidebar:"subgraph",previous:{title:"assetAmounts",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/asset-amounts"},next:{title:"darknode",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/darknode"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"assets(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Asset_orderBy\n  orderDirection: OrderDirection\n  where: Asset_filter\n  block: Block_height\n): [Asset!]!\n\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"skip-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"first-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"orderby-asset_orderby"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/asset-order-by"},Object(o.mdx)("inlineCode",{parentName:"a"},"Asset_orderBy")),")"),Object(o.mdx)("h4",{id:"orderdirection-orderdirection"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(o.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(o.mdx)("h4",{id:"where-asset_filter"},Object(o.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/asset-filter"},Object(o.mdx)("inlineCode",{parentName:"a"},"Asset_filter")),")"),Object(o.mdx)("h4",{id:"block-block_height"},Object(o.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(o.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(o.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(o.mdx)("h3",{id:"type"},"Type"),Object(o.mdx)("h4",{id:"asset"},Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset"},Object(o.mdx)("inlineCode",{parentName:"a"},"Asset"))))}l.isMDXComponent=!0},485:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return u})),r.d(t,"MDXProvider",(function(){return b})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return l})),r.d(t,"withMDXComponents",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){return function(t){var r=l(t.components);return a.a.createElement(e,i({},t,{components:r}))}},l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},486:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=n(r(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);