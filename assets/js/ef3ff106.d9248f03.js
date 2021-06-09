(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(487)),c=n(488),i={id:"meta",title:"_Meta_"},l={unversionedId:"subgraph/objects/meta",id:"subgraph/objects/meta",isDocsHomePage:!1,title:"_Meta_",description:"<span",source:"@site/subgraph/subgraph/objects/meta.mdx",slug:"/subgraph/objects/meta",permalink:"/ren-client-docs/subgraph/subgraph/objects/meta",version:"current",sidebar:"subgraph",previous:{title:"IntegratorContract",permalink:"/ren-client-docs/subgraph/subgraph/objects/integrator-contract"},next:{title:"RenVM",permalink:"/ren-client-docs/subgraph/subgraph/objects/ren-vm"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(a.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"The type for the top-level ","_","meta field"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"type _Meta_ {\n  block: _Block_!\n  deployment: String!\n  hasIndexingErrors: Boolean!\n}\n")),Object(a.mdx)("h3",{id:"fields"},"Fields"),Object(a.mdx)("h4",{id:"block-_block_"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/block"},Object(a.mdx)("inlineCode",{parentName:"a"},"_Block_!")),")"),Object(a.mdx)("p",null,"Information about a specific subgraph block. The hash of the block\nwill be null if the ","_","meta field has a block constraint that asks for\na block number. It will be filled if the ","_","meta field has no block constraint\nand therefore asks for the latest block"),Object(a.mdx)("h4",{id:"deployment-string"},Object(a.mdx)("inlineCode",{parentName:"h4"},"deployment")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(a.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.mdx)("p",null,"The deployment ID"),Object(a.mdx)("h4",{id:"hasindexingerrors-boolean"},Object(a.mdx)("inlineCode",{parentName:"h4"},"hasIndexingErrors")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/boolean"},Object(a.mdx)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(a.mdx)("p",null,"If ",Object(a.mdx)("inlineCode",{parentName:"p"},"true"),", the subgraph encountered indexing errors at some past block"))}d.isMDXComponent=!0},487:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,c({},t,{components:n}))}},d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,b=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return n?o.a.createElement(b,l(l({ref:t},i),{},{components:n})):o.a.createElement(b,l({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},488:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o=r(n(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);