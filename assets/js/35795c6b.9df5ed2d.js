(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),i=(t(0),t(485)),c={id:"interfaces_build_main_parameters.transferparamscommon",title:"Interface: TransferParamsCommon",sidebar_label:"TransferParamsCommon",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/interfaces_build_main_parameters.transferparamscommon",id:"api/interfaces/interfaces_build_main_parameters.transferparamscommon",isDocsHomePage:!1,title:"Interface: TransferParamsCommon",description:"Interface: TransferParamsCommon",source:"@site/ren-js/api/interfaces/interfaces_build_main_parameters.transferparamscommon.md",slug:"/api/interfaces/interfaces_build_main_parameters.transferparamscommon",permalink:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_parameters.transferparamscommon",editUrl:null,version:"current",sidebar_label:"TransferParamsCommon",sidebar:"docs",previous:{title:"Interface: LockAndMintParams<LockTransaction, LockDeposit, LockAddress, MintTransaction, MintAddress>",permalink:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_parameters.lockandmintparams"},next:{title:"Interface: RenTransaction<Input, Output>",permalink:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_transaction.rentransaction"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"asset",id:"asset",children:[]},{value:"contractCalls",id:"contractcalls",children:[]},{value:"nonce",id:"nonce",children:[]},{value:"tags",id:"tags",children:[]},{value:"txHash",id:"txhash",children:[]}]}],m={toc:o};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"interface-transferparamscommon"},"Interface: TransferParamsCommon"),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/interfaces_build_main_parameters"},"interfaces/build/main/parameters"),".TransferParamsCommon"),Object(i.mdx)("p",null,"The parameters required for both minting and burning."),Object(i.mdx)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("strong",{parentName:"p"},"TransferParamsCommon")),Object(i.mdx)("p",{parentName:"li"},"\u21b3 ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_parameters.lockandmintparams"},Object(i.mdx)("em",{parentName:"a"},"LockAndMintParams"))),Object(i.mdx)("p",{parentName:"li"},"\u21b3 ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_parameters.burnandreleaseparams"},Object(i.mdx)("em",{parentName:"a"},"BurnAndReleaseParams"))))),Object(i.mdx)("h2",{id:"properties"},"Properties"),Object(i.mdx)("h3",{id:"asset"},"asset"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("strong",{parentName:"p"},"asset"),": ",Object(i.mdx)("em",{parentName:"p"},"string")),Object(i.mdx)("p",null,"The asset being minted or burned - e.g. ",Object(i.mdx)("inlineCode",{parentName:"p"},'"BTC"'),"."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:39"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"contractcalls"},"contractCalls"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"contractCalls"),": ",Object(i.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/interfaces_build_main_parameters.contractcall"},Object(i.mdx)("em",{parentName:"a"},"ContractCall")),"[]"),Object(i.mdx)("p",null,"Details for submitting one or more transactions. The last one will be\nused by the lockAndMint or burnAndRelease.\nFor minting, the last call's parameters will be augmented with the three\nrequired parameters for minting - the amount, nHash and RenVM signature.\nFor burning, the last call must involve ren-assets being burnt."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:91"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"nonce"},"nonce"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"nonce"),": ",Object(i.mdx)("em",{parentName:"p"},"string")," ","|"," ",Object(i.mdx)("em",{parentName:"p"},"Buffer")),Object(i.mdx)("p",null,"A LockAndMint's gateway address can be forced to be unique by providing a\n32-byte nonce."),Object(i.mdx)("p",null,'The nonce should be passed is as a 32-byte Buffer or a 32-byte hex\nstring, with or without a "0x" prefix.'),Object(i.mdx)("p",null,"It defaults to 0 (32 empty bytes)."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},Object(i.mdx)("inlineCode",{parentName:"strong"},"warning"))," If the nonce is lost between detecting a deposit and\nsubmitting it to RenVM, the deposit's funds can't be recovered.\nA nonce should only be provided if it's guaranteed to be stored in\npersistent storage before a deposit address is shown to the user."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},Object(i.mdx)("inlineCode",{parentName:"strong"},"example"))," "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre"},"nonce: Buffer.from(new Array(32)),\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},Object(i.mdx)("inlineCode",{parentName:"strong"},"example"))," "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre"},'// Use a nonce based on the number of days since epoch, in order to\n// generate a new deposit address each day.\nnonce: new BN(Math.floor(Date.now() / 8.64e7))\n         .toArrayLike(Buffer, "be", 32),\n')),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},Object(i.mdx)("inlineCode",{parentName:"strong"},"example"))," "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre"},"// Provide a random 32-byte Buffer. It's important that this isn't lost.\nnonce: RenJS.utils.randomNonce(),\n")),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:78"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"tags"},"tags"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"tags"),": ","[",Object(i.mdx)("em",{parentName:"p"},"string"),"]"),Object(i.mdx)("p",null,"Provide optional tags which can be used to look up transfers in the\nlightnodes."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:83"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"txhash"},"txHash"),Object(i.mdx)("p",null,"\u2022 ",Object(i.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.mdx)("strong",{parentName:"p"},"txHash"),": ",Object(i.mdx)("em",{parentName:"p"},"string")),Object(i.mdx)("p",null,"A RenVM transaction hash, which can be used to resume an existing mint\nor burn."),Object(i.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:44"))}d.isMDXComponent=!0},485:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return l}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){return function(n){var t=p(n.components);return a.a.createElement(e,c({},n,{components:t}))}},p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(t),l=r,u=d["".concat(c,".").concat(l)]||d[l]||b[l]||i;return t?a.a.createElement(u,o(o({ref:n},s),{},{components:t})):a.a.createElement(u,o({ref:n},s))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var m=2;m<i;m++)c[m]=t[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);