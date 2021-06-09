(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(487)),i=r(488),c={id:"integrator",title:"integrator"},u={unversionedId:"subgraph/queries/integrator",id:"subgraph/queries/integrator",isDocsHomePage:!1,title:"integrator",description:"<span",source:"@site/subgraph/subgraph/queries/integrator.mdx",slug:"/subgraph/queries/integrator",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator",version:"current",sidebar:"subgraph",previous:{title:"epoches",permalink:"/ren-client-docs/subgraph/subgraph/queries/epoches"},next:{title:"integratorContract",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator-contract"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var t=e.children,r=e.color;return Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"integrator(\n  id: ID!\n  block: Block_height\n): Integrator\n\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"id-id"},Object(o.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(o.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.mdx)("h4",{id:"block-block_height"},Object(o.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(o.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(o.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(o.mdx)("h3",{id:"type"},"Type"),Object(o.mdx)("h4",{id:"integrator"},Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/integrator"},Object(o.mdx)("inlineCode",{parentName:"a"},"Integrator"))))}s.isMDXComponent=!0},487:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return l})),r.d(t,"MDXProvider",(function(){return m})),r.d(t,"mdx",(function(){return g})),r.d(t,"useMDXComponents",(function(){return s})),r.d(t,"withMDXComponents",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){return function(t){var r=s(t.components);return a.a.createElement(e,i({},t,{components:r}))}},s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,u(u({ref:t},c),{},{components:r})):a.a.createElement(m,u({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},488:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=n(r(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);