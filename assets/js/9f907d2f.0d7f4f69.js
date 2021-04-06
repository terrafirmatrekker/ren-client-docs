(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(485)),o=n(486),c={id:"asset",title:"Asset"},s={unversionedId:"subgraph/objects/asset",id:"subgraph/objects/asset",isDocsHomePage:!1,title:"Asset",description:"<span",source:"@site/subgraph/subgraph/objects/asset.mdx",slug:"/subgraph/objects/asset",permalink:"/ren-client-docs/subgraph/subgraph/objects/asset",version:"current",sidebar:"subgraph",previous:{title:"Query 24h fees",permalink:"/ren-client-docs/subgraph/examples/24h-fees"},next:{title:"AssetAmount",permalink:"/ren-client-docs/subgraph/subgraph/objects/asset-amount"}},d=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(i.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:d,Tag:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Asset {\n  id: ID!\n  gatewayAddress: String!\n  tokenAddress: String!\n  symbol: String!\n  decimals: BigInt!\n  priceInEth: BigDecimal!\n  priceInUsd: BigDecimal!\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"gatewayaddress-string"},Object(i.mdx)("inlineCode",{parentName:"h4"},"gatewayAddress")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(i.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.mdx)("h4",{id:"tokenaddress-string"},Object(i.mdx)("inlineCode",{parentName:"h4"},"tokenAddress")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(i.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.mdx)("h4",{id:"symbol-string"},Object(i.mdx)("inlineCode",{parentName:"h4"},"symbol")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(i.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.mdx)("h4",{id:"decimals-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"decimals")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"priceineth-bigdecimal"},Object(i.mdx)("inlineCode",{parentName:"h4"},"priceInEth")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-decimal"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"),Object(i.mdx)("h4",{id:"priceinusd-bigdecimal"},Object(i.mdx)("inlineCode",{parentName:"h4"},"priceInUsd")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-decimal"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"))}u.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(n),l=r,m=p["".concat(o,".").concat(l)]||p[l]||b[l]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);