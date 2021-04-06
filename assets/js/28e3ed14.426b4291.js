(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return o})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return b})),n.d(t,"withMDXComponents",(function(){return u}));var a=n(0),r=n.n(a);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){return function(t){var n=b(t.components);return r.a.createElement(e,d({},t,{components:n}))}},b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,m=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,o=p["".concat(d,".").concat(u)]||p[u]||s[u]||m;return n?r.a.createElement(o,l(l({ref:t},i),{},{components:n})):r.a.createElement(o,l({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var m=n.length,d=new Array(m);d[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var c=2;c<m;c++)d[c]=n[c];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),m=(n(0),n(485)),d={id:"utils_build_main_hash",title:"Module: utils/build/main/hash",sidebar_label:"utils/build/main/hash",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/modules/utils_build_main_hash",id:"api/modules/utils_build_main_hash",isDocsHomePage:!1,title:"Module: utils/build/main/hash",description:"Module: utils/build/main/hash",source:"@site/ren-js/api/modules/utils_build_main_hash.md",slug:"/api/modules/utils_build_main_hash",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_hash",editUrl:null,version:"current",sidebar_label:"utils/build/main/hash",sidebar:"docs",previous:{title:"Module: utils/build/main/contractCalls",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_contractcalls"},next:{title:"Module: utils/build/main/renVMHashes",permalink:"/ren-client-docs/ren-js/api/modules/utils_build_main_renvmhashes"}},l=[{value:"Functions",id:"functions",children:[{value:"hash160",id:"hash160",children:[]},{value:"keccak256",id:"keccak256",children:[]},{value:"ripemd160",id:"ripemd160",children:[]},{value:"sha256",id:"sha256",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(m.mdx)("wrapper",Object(a.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"module-utilsbuildmainhash"},"Module: utils/build/main/hash"),Object(m.mdx)("h2",{id:"functions"},"Functions"),Object(m.mdx)("h3",{id:"hash160"},"hash160"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"hash160"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"publicKey"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),"): ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("h4",{id:"parameters"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"publicKey")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/hash.d.ts:5"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"keccak256"},"keccak256"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"keccak256"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"msg"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),"): ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("h4",{id:"parameters-1"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"msg")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/hash.d.ts:2"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"ripemd160"},"ripemd160"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"ripemd160"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"msg"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),"): ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("h4",{id:"parameters-2"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"msg")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/hash.d.ts:3"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"sha256"},"sha256"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"sha256"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"msg"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),"): ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("h4",{id:"parameters-3"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"msg")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/hash.d.ts:4"))}p.isMDXComponent=!0}}]);