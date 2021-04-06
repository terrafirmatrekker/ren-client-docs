(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{273:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),c=(t(0),t(485)),i={id:"index",title:"root",slug:"/api",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"root",description:"RenJS Docs",source:"@site/ren-js/api/index.md",slug:"/api",permalink:"/ren-client-docs/ren-js/api",editUrl:null,version:"current",sidebar_label:"Readme",sidebar:"docs",previous:{title:"Ren Brand Hub",permalink:"/ren-client-docs/ren-js/other/brand"},next:{title:"root",permalink:"/ren-client-docs/ren-js/api/modules"}},l=[{value:"RenJS - @renproject/ren",id:"renjs---renprojectren",children:[]},{value:"Chains",id:"chains",children:[]},{value:"RenTX",id:"rentx",children:[]},{value:"MultiWallet",id:"multiwallet",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.mdx)("wrapper",Object(r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"renjs-docs"},"RenJS Docs"),Object(c.mdx)("p",null,"These are automatically generated docs for RenJS's interfaces, hosted at ",Object(c.mdx)("a",{parentName:"p",href:"https://renproject.github.io/ren-js-docs/"},"renproject.github.io/ren-js-docs"),"."),Object(c.mdx)("p",null,"See ",Object(c.mdx)("a",{parentName:"p",href:"https://docs.renproject.io/developers"},"docs.renproject.io/developers")," for more docs and tutorials."),Object(c.mdx)("h3",{id:"renjs---renprojectren"},"RenJS - @renproject/ren"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("p",{parentName:"li"},"[","[RenJS]","]"),Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("p",{parentName:"li"},"[","[RenJS.lockAndMint]","] - for minting ren-assets, e.g. bridging BTC onto Ethereum as renBTC.\nRenJS.lockAndMint returns a ",Object(c.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/ren_src_lockandmint.lockandmint"},"LockAndMint")," object, and each deposit creates a ",Object(c.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/ren_src_lockandmint.lockandmintdeposit"},"LockAndMintDeposit"),".")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("p",{parentName:"li"},"[","[RenJS.burnAndRelease]","] - for returning assets to their native chains - e.g. burning renBTC back to BTC.\nRenJS.burnAndRelease returns a ",Object(c.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/ren_src_burnandrelease.burnandrelease"},"BurnAndRelease")," object."))))),Object(c.mdx)("h3",{id:"chains"},"Chains"),Object(c.mdx)("p",null,"The package ",Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/ren")," doesn't come with support for any chains - they must be imported separately, either\nindividually - e.g. ",Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-bitcoin")," - or using ",Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/chains"),", which combines several chains\npackages."),Object(c.mdx)("p",null,"For docs on each chain, see:"),Object(c.mdx)("p",null,Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-bitcoin"),":"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"[","[BitcoinClass]","]"),Object(c.mdx)("li",{parentName:"ul"},"[","[ZcashClass]","]"),Object(c.mdx)("li",{parentName:"ul"},"[","[BitcoinCashClass]","]")),Object(c.mdx)("p",null,Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-filecoin"),":"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"[","[FilecoinClass]","]")),Object(c.mdx)("p",null,Object(c.mdx)("inlineCode",{parentName:"p"},"@renproject/chains-ethereum"),":"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"[","[EthereumClass]","]"),Object(c.mdx)("li",{parentName:"ul"},"[","[BinanceSmartChainClass]","]")),Object(c.mdx)("h3",{id:"rentx"},"RenTX"),Object(c.mdx)("p",null,"See the ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/tree/feat/2.0.0-alpha.21/packages/lib/rentx"},"RenTX README"),"."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"[","[mintMachine]","]"),Object(c.mdx)("li",{parentName:"ul"},"[","[burnMachine]","]")),Object(c.mdx)("h3",{id:"multiwallet"},"MultiWallet"),Object(c.mdx)("p",null,"See the ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/tree/feat/2.0.0-alpha.21/packages/ui/multiwallet-ui"},"MultiWallet README"),"."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"[","[WalletPicker]","]")))}s.isMDXComponent=!0},485:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return u})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){return function(n){var t=u(n.components);return a.a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return t?a.a.createElement(m,l(l({ref:n},o),{},{components:t})):a.a.createElement(m,l({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=j;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);