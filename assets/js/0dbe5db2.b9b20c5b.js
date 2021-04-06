(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{485:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return l})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return h})),t.d(n,"useMDXComponents",(function(){return d})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){return function(n){var t=d(n.components);return o.a.createElement(e,c({},n,{components:t}))}},d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(t),s=r,m=l["".concat(c,".").concat(s)]||l[s]||b[s]||a;return t?o.a.createElement(m,u(u({ref:n},i),{},{components:t})):o.a.createElement(m,u({ref:n},i))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},486:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return p})),t.d(n,"Tag",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(485)),c=t(486),i={id:"ren-vm",title:"renVM"},u={unversionedId:"subgraph/subscriptions/ren-vm",id:"subgraph/subscriptions/ren-vm",isDocsHomePage:!1,title:"renVM",description:"<span",source:"@site/subgraph/subgraph/subscriptions/ren-vm.mdx",slug:"/subgraph/subscriptions/ren-vm",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/ren-vm",version:"current",sidebar:"subgraph",previous:{title:"renVMs",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/ren-v-ms"},next:{title:"transaction",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/transaction"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var n=e.children,t=e.color;return Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:p,Tag:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"renVM(\n  id: ID!\n  block: Block_height\n): RenVM\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"id-id"},Object(a.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(a.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"renvm"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/ren-vm"},Object(a.mdx)("inlineCode",{parentName:"a"},"RenVM"))),Object(a.mdx)("p",null,"The RenVM entity contains all the information about the current state of RenVM's\non-chain information."))}d.isMDXComponent=!0}}]);