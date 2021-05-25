(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(488)),o=n(489),c={id:"darknode",title:"Darknode"},d={unversionedId:"subgraph/objects/darknode",id:"subgraph/objects/darknode",isDocsHomePage:!1,title:"Darknode",description:"<span",source:"@site/subgraph/subgraph/objects/darknode.mdx",slug:"/subgraph/objects/darknode",permalink:"/ren-client-docs/subgraph/subgraph/objects/darknode",version:"current",sidebar:"subgraph",previous:{title:"AssetAmount",permalink:"/ren-client-docs/subgraph/subgraph/objects/asset-amount"},next:{title:"Epoch",permalink:"/ren-client-docs/subgraph/subgraph/objects/epoch"}},p=[{value:"Fields",id:"fields",children:[]}],m=function(e){var t=e.children,n=e.color;return Object(i.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:m};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Darknode {\n  id: ID!\n  operator: Bytes!\n  bond: BigInt!\n  publicKey: Bytes!\n  registeredAt: BigInt!\n  deregisteredAt: BigInt!\n  lastClaimedEpoch: BigInt\n  previousLastClaimedEpoch: BigInt\n  balances(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  balanceBTC: BigInt!\n  balanceZEC: BigInt!\n  balanceBCH: BigInt!\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"operator-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"operator")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes!")),")"),Object(i.mdx)("h4",{id:"bond-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"bond")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"publickey-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"publicKey")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes!")),")"),Object(i.mdx)("h4",{id:"registeredat-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"registeredAt")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"deregisteredat-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"deregisteredAt")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lastclaimedepoch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lastClaimedEpoch")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt")),")"),Object(i.mdx)("h4",{id:"previouslastclaimedepoch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"previousLastClaimedEpoch")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt")),")"),Object(i.mdx)("h4",{id:"balances-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"balances")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"balancebtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"balanceBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"balancezec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"balanceZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"balancebch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"balanceBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"))}b.isMDXComponent=!0},488:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return l})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return b})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){return function(t){var n=b(t.components);return a.a.createElement(e,o({},t,{components:n}))}},b=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=b(n),s=r,l=m["".concat(o,".").concat(s)]||m[s]||u[s]||i;return n?a.a.createElement(l,d(d({ref:t},c),{},{components:n})):a.a.createElement(l,d({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},489:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);