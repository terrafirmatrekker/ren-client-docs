(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{312:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return u})),t.d(r,"Tag",(function(){return d})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(8),o=(t(0),t(487)),i=t(488),c={id:"integrators",title:"integrators"},p={unversionedId:"subgraph/queries/integrators",id:"subgraph/queries/integrators",isDocsHomePage:!1,title:"integrators",description:"<span",source:"@site/subgraph/subgraph/queries/integrators.mdx",slug:"/subgraph/queries/integrators",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrators",version:"current",sidebar:"subgraph",previous:{title:"integratorContracts",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator-contracts"},next:{title:"_meta",permalink:"/ren-client-docs/subgraph/subgraph/queries/meta"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d=function(e){var r=e.children,t=e.color;return Object(o.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},l={toc:u,Tag:d};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"integrators(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Integrator_orderBy\n  orderDirection: OrderDirection\n  where: Integrator_filter\n  block: Block_height\n): [Integrator!]!\n\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"skip-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"first-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"orderby-integrator_orderby"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/integrator-order-by"},Object(o.mdx)("inlineCode",{parentName:"a"},"Integrator_orderBy")),")"),Object(o.mdx)("h4",{id:"orderdirection-orderdirection"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(o.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(o.mdx)("h4",{id:"where-integrator_filter"},Object(o.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/integrator-filter"},Object(o.mdx)("inlineCode",{parentName:"a"},"Integrator_filter")),")"),Object(o.mdx)("h4",{id:"block-block_height"},Object(o.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(o.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(o.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(o.mdx)("h3",{id:"type"},"Type"),Object(o.mdx)("h4",{id:"integrator"},Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/integrator"},Object(o.mdx)("inlineCode",{parentName:"a"},"Integrator"))))}s.isMDXComponent=!0},487:function(e,r,t){"use strict";t.r(r),t.d(r,"MDXContext",(function(){return d})),t.d(r,"MDXProvider",(function(){return m})),t.d(r,"mdx",(function(){return h})),t.d(r,"useMDXComponents",(function(){return s})),t.d(r,"withMDXComponents",(function(){return l}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){return function(r){var t=s(r.components);return a.a.createElement(e,i({},r,{components:t}))}},s=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},m=function(e){var r=s(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},g=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),l=n,m=d["".concat(i,".").concat(l)]||d[l]||b[l]||o;return t?a.a.createElement(m,p(p({ref:r},c),{},{components:t})):a.a.createElement(m,p({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},488:function(e,r,t){"use strict";var n=t(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var a=n(t(0));let o;r.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(r.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);