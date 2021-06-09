(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{349:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return p})),t.d(n,"Tag",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(487)),c=t(488),i={id:"transaction-type",title:"TransactionType"},u={unversionedId:"subgraph/enums/transaction-type",id:"subgraph/enums/transaction-type",isDocsHomePage:!1,title:"TransactionType",description:"<span",source:"@site/subgraph/subgraph/enums/transaction-type.mdx",slug:"/subgraph/enums/transaction-type",permalink:"/ren-client-docs/subgraph/subgraph/enums/transaction-type",version:"current",sidebar:"subgraph",previous:{title:"Transaction_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/transaction-order-by"},next:{title:"ValueWithAsset_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/value-with-asset-order-by"}},p=[{value:"Values",id:"values",children:[]}],s=function(e){var n=e.children,t=e.color;return Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},l={toc:p,Tag:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum TransactionType {\n  mint\n  burn\n}\n")),Object(a.mdx)("h3",{id:"values"},"Values"),Object(a.mdx)("h4",{id:"mint"},Object(a.mdx)("inlineCode",{parentName:"h4"},"mint")),Object(a.mdx)("h4",{id:"burn"},Object(a.mdx)("inlineCode",{parentName:"h4"},"burn")))}d.isMDXComponent=!0},487:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return f})),t.d(n,"mdx",(function(){return y})),t.d(n,"useMDXComponents",(function(){return d})),t.d(n,"withMDXComponents",(function(){return l}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){return function(n){var t=d(n.components);return o.a.createElement(e,c({},n,{components:t}))}},d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},f=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(t),l=r,f=s["".concat(c,".").concat(l)]||s[l]||m[l]||a;return t?o.a.createElement(f,u(u({ref:n},i),{},{components:t})):o.a.createElement(f,u({ref:n},i))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},488:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var o=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);