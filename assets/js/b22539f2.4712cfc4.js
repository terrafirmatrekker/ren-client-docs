(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{296:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return u})),t.d(r,"Tag",(function(){return d})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(8),a=(t(0),t(488)),c=t(489),i={id:"epoches",title:"epoches"},p={unversionedId:"subgraph/queries/epoches",id:"subgraph/queries/epoches",isDocsHomePage:!1,title:"epoches",description:"<span",source:"@site/subgraph/subgraph/queries/epoches.mdx",slug:"/subgraph/queries/epoches",permalink:"/ren-client-docs/subgraph/subgraph/queries/epoches",version:"current",sidebar:"subgraph",previous:{title:"epoch",permalink:"/ren-client-docs/subgraph/subgraph/queries/epoch"},next:{title:"integrator",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d=function(e){var r=e.children,t=e.color;return Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},l={toc:u,Tag:d};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(n.default)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"epoches(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Epoch_orderBy\n  orderDirection: OrderDirection\n  where: Epoch_filter\n  block: Block_height\n): [Epoch!]!\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"skip-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"first-int"},Object(a.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(a.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.mdx)("h4",{id:"orderby-epoch_orderby"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/epoch-order-by"},Object(a.mdx)("inlineCode",{parentName:"a"},"Epoch_orderBy")),")"),Object(a.mdx)("h4",{id:"orderdirection-orderdirection"},Object(a.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(a.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(a.mdx)("h4",{id:"where-epoch_filter"},Object(a.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/epoch-filter"},Object(a.mdx)("inlineCode",{parentName:"a"},"Epoch_filter")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"epoch"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/epoch"},Object(a.mdx)("inlineCode",{parentName:"a"},"Epoch"))))}s.isMDXComponent=!0},488:function(e,r,t){"use strict";t.r(r),t.d(r,"MDXContext",(function(){return d})),t.d(r,"MDXProvider",(function(){return m})),t.d(r,"mdx",(function(){return f})),t.d(r,"useMDXComponents",(function(){return s})),t.d(r,"withMDXComponents",(function(){return l}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){return function(r){var t=s(r.components);return o.a.createElement(e,c({},r,{components:t}))}},s=function(e){var r=o.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},m=function(e){var r=s(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},h=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=s(t),l=n,m=d["".concat(c,".").concat(l)]||d[l]||b[l]||a;return t?o.a.createElement(m,p(p({ref:r},i),{},{components:t})):o.a.createElement(m,p({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=h;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},489:function(e,r,t){"use strict";var n=t(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o=n(t(0));let a;r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);