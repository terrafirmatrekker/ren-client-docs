(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{39:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(485)),d=n(486),m={id:"epoch",title:"Epoch"},o={unversionedId:"subgraph/objects/epoch",id:"subgraph/objects/epoch",isDocsHomePage:!1,title:"Epoch",description:"<span",source:"@site/subgraph/subgraph/objects/epoch.mdx",slug:"/subgraph/objects/epoch",permalink:"/ren-client-docs/subgraph/subgraph/objects/epoch",version:"current",sidebar:"subgraph",previous:{title:"Darknode",permalink:"/ren-client-docs/subgraph/subgraph/objects/darknode"},next:{title:"Integrator",permalink:"/ren-client-docs/subgraph/subgraph/objects/integrator"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(i.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:c,Tag:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Epoch {\n  id: ID!\n  epochhash: BigInt!\n  timestamp: BigInt!\n  blockNumber: BigInt!\n  nextEpochBlockNumber: BigInt!\n  minimumBond: BigInt!\n  minimumEpochInterval: BigInt!\n  numberOfDarknodes: BigInt!\n  numberOfDarknodesLastEpoch: BigInt!\n  rewardShares(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  cumulativeRewardShares(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  rewardShareBTC: BigInt!\n  rewardShareZEC: BigInt!\n  rewardShareBCH: BigInt!\n  totalRewardShareBTC: BigInt!\n  totalRewardShareZEC: BigInt!\n  totalRewardShareBCH: BigInt!\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"epochhash-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"epochhash")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"timestamp-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"timestamp")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"blocknumber-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"blockNumber")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"nextepochblocknumber-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"nextEpochBlockNumber")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"minimumbond-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"minimumBond")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"minimumepochinterval-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"minimumEpochInterval")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"numberofdarknodes-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"numberOfDarknodes")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"numberofdarknodeslastepoch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"numberOfDarknodesLastEpoch")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"rewardshares-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"rewardShares")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"cumulativerewardshares-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"cumulativeRewardShares")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"rewardsharebtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"rewardShareBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"rewardsharezec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"rewardShareZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"rewardsharebch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"rewardShareBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"totalrewardsharebtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"totalRewardShareBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"totalrewardsharezec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"totalRewardShareZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"totalrewardsharebch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"totalRewardShareBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"))}s.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return h})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){return function(t){var n=s(t.components);return a.a.createElement(e,d({},t,{components:n}))}},s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,h=p["".concat(d,".").concat(b)]||p[b]||l[b]||i;return n?a.a.createElement(h,o(o({ref:t},m),{},{components:n})):a.a.createElement(h,o({ref:t},m))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var c=2;c<i;c++)d[c]=n[c];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const d={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+d[e]||!1,borderRadius:"5px",color:d[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);