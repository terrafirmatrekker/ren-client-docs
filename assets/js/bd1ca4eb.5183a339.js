(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{318:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return p}));var t=n(3),o=(n(0),n(489));const a={id:"subgraph-error-policy",title:"_SubgraphErrorPolicy_"},c={unversionedId:"subgraph/enums/subgraph-error-policy",id:"subgraph/enums/subgraph-error-policy",isDocsHomePage:!1,title:"_SubgraphErrorPolicy_",description:"No description",source:"@site/subgraph/subgraph/enums/subgraph-error-policy.mdx",slug:"/subgraph/enums/subgraph-error-policy",permalink:"/ren-client-docs/subgraph/subgraph/enums/subgraph-error-policy",version:"current",sidebar:"subgraph",previous:{title:"RenVM_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/ren-vm-order-by"},next:{title:"Transaction_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/transaction-order-by"}},i=[{value:"Values",id:"values",children:[]}],u={toc:i};function p({components:e,...r}){return Object(o.mdx)("wrapper",Object(t.default)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum _SubgraphErrorPolicy_ {\n  allow\n  deny\n}\n")),Object(o.mdx)("h3",{id:"values"},"Values"),Object(o.mdx)("h4",{id:"allow"},Object(o.mdx)("inlineCode",{parentName:"h4"},"allow")),Object(o.mdx)("p",null,"Data will be returned even if the subgraph has indexing errors"),Object(o.mdx)("h4",{id:"deny"},Object(o.mdx)("inlineCode",{parentName:"h4"},"deny")),Object(o.mdx)("p",null,"If the subgraph has indexing errors, data will be omitted. The default."))}p.isMDXComponent=!0},489:function(e,r,n){"use strict";n.r(r),n.d(r,"MDXContext",(function(){return l})),n.d(r,"MDXProvider",(function(){return b})),n.d(r,"mdx",(function(){return y})),n.d(r,"useMDXComponents",(function(){return d})),n.d(r,"withMDXComponents",(function(){return s}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){return function(r){var n=d(r.components);return o.a.createElement(e,c({},r,{components:n}))}},d=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},b=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(n),s=t,b=l["".concat(c,".").concat(s)]||l[s]||m[s]||a;return n?o.a.createElement(b,u(u({ref:r},i),{},{components:n})):o.a.createElement(b,u({ref:r},i))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);