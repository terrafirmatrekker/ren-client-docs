(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{303:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return l})),n.d(r,"Tag",(function(){return p})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(8),a=(n(0),n(485)),c=n(486),i={id:"subgraph-error-policy",title:"_SubgraphErrorPolicy_"},u={unversionedId:"subgraph/enums/subgraph-error-policy",id:"subgraph/enums/subgraph-error-policy",isDocsHomePage:!1,title:"_SubgraphErrorPolicy_",description:"<span",source:"@site/subgraph/subgraph/enums/subgraph-error-policy.mdx",slug:"/subgraph/enums/subgraph-error-policy",permalink:"/ren-client-docs/subgraph/subgraph/enums/subgraph-error-policy",version:"current",sidebar:"subgraph",previous:{title:"RenVM_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/ren-vm-order-by"},next:{title:"Transaction_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/transaction-order-by"}},l=[{value:"Values",id:"values",children:[]}],p=function(e){var r=e.children,n=e.color;return Object(a.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},s={toc:l,Tag:p};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(t.default)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum _SubgraphErrorPolicy_ {\n  allow\n  deny\n}\n")),Object(a.mdx)("h3",{id:"values"},"Values"),Object(a.mdx)("h4",{id:"allow"},Object(a.mdx)("inlineCode",{parentName:"h4"},"allow")),Object(a.mdx)("p",null,"Data will be returned even if the subgraph has indexing errors"),Object(a.mdx)("h4",{id:"deny"},Object(a.mdx)("inlineCode",{parentName:"h4"},"deny")),Object(a.mdx)("p",null,"If the subgraph has indexing errors, data will be omitted. The default."))}d.isMDXComponent=!0},485:function(e,r,n){"use strict";n.r(r),n.d(r,"MDXContext",(function(){return p})),n.d(r,"MDXProvider",(function(){return f})),n.d(r,"mdx",(function(){return y})),n.d(r,"useMDXComponents",(function(){return d})),n.d(r,"withMDXComponents",(function(){return s}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){return function(r){var n=d(r.components);return o.a.createElement(e,c({},r,{components:n}))}},d=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},f=function(e){var r=d(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=t,f=p["".concat(c,".").concat(s)]||p[s]||m[s]||a;return n?o.a.createElement(f,u(u({ref:r},i),{},{components:n})):o.a.createElement(f,u({ref:r},i))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},486:function(e,r,n){"use strict";var t=n(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o=t(n(0));let a;r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);