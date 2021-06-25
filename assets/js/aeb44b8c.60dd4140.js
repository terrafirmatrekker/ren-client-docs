(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{292:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=(t(0),t(489));const o={id:"darknode",title:"darknode"},i={unversionedId:"subgraph/subscriptions/darknode",id:"subgraph/subscriptions/darknode",isDocsHomePage:!1,title:"darknode",description:"No description",source:"@site/subgraph/subgraph/subscriptions/darknode.mdx",slug:"/subgraph/subscriptions/darknode",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/darknode",version:"current",sidebar:"subgraph",previous:{title:"assets",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/assets"},next:{title:"darknodes",permalink:"/ren-client-docs/subgraph/subgraph/subscriptions/darknodes"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:c};function s({components:e,...n}){return Object(a.mdx)("wrapper",Object(r.default)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"darknode(\n  id: ID!\n  block: Block_height\n): Darknode\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"id-id"},Object(a.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/scalars/id"},Object(a.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"darknode"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/objects/darknode"},Object(a.mdx)("inlineCode",{parentName:"a"},"Darknode"))))}s.isMDXComponent=!0},489:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return b})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return l})),t.d(n,"withMDXComponents",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){return function(n){var t=l(n.components);return a.a.createElement(e,i({},n,{components:t}))}},l=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?a.a.createElement(b,u(u({ref:n},c),{},{components:t})):a.a.createElement(b,u({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);