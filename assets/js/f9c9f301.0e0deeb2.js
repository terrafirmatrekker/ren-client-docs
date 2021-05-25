(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),i=(t(0),t(488)),a={title:"Quick Start"},c={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"This is a quick-start guide with minimal code snippets for minting and burning Bitcoin on Ethereum.",source:"@site/ren-js/quick-start.md",slug:"/quick-start",permalink:"/ren-client-docs/ren-js/quick-start",version:"current",sidebar:"docs",previous:{title:"Welcome",permalink:"/ren-client-docs/ren-js/"},next:{title:"Overview",permalink:"/ren-client-docs/ren-js/tutorial/overview"}},s=[{value:"Install RenJS and Ethers",id:"install-renjs-and-ethers",children:[]},{value:"Mint tokenized Bitcoin",id:"mint-tokenized-bitcoin",children:[]},{value:"Burn and release tokenized Bitcoin",id:"burn-and-release-tokenized-bitcoin",children:[]}],d={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"This is a quick-start guide with minimal code snippets for minting and burning Bitcoin on Ethereum."),Object(i.mdx)("p",null,"This assumes ",Object(i.mdx)("inlineCode",{parentName:"p"},"window.ethereum")," is available (e.g. in a browser with MetaMask installed). See ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider"},"hdwallet-provider")," and ",Object(i.mdx)("a",{parentName:"p",href:"https://infura.io"},"infura.io")," if you are using RenJS using Node.js instead of in a browser."),Object(i.mdx)("h3",{id:"install-renjs-and-ethers"},"Install RenJS and Ethers"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn add @renproject/ren @renproject/chains ethers\n")),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"mint-tokenized-bitcoin"},"Mint tokenized Bitcoin"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-ts"},'import { Bitcoin, Ethereum } from "@renproject/chains";\nimport RenJS from "@renproject/ren";\nimport { ethers } from "ethers";\n\nconst mint = async () => {\n  await window.ethereum.enable();\n  const provider = new ethers.providers.Web3Provider(window.ethereum);\n  provider.getSigner();\n  const signer = provider.getSigner();\n  const address = await signer.getAddress();\n\n  const lockAndMint = await new RenJS("testnet").lockAndMint({\n    asset: "BTC",\n    from: Bitcoin(),\n    to: Ethereum(provider.provider).Address(address),\n  });\n\n  console.log(`Deposit BTC to ${lockAndMint.gatewayAddress}`);\n\n  lockAndMint.on("deposit", RenJS.defaultDepositHandler);\n};\n\nmint().catch(console.error);\n')),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"burn-and-release-tokenized-bitcoin"},"Burn and release tokenized Bitcoin"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-ts"},'import { Bitcoin, Ethereum } from "@renproject/chains";\nimport RenJS from "@renproject/ren";\nimport { ethers } from "ethers";\n\nconst burn = async () => {\n  await window.ethereum.enable();\n  const provider = new ethers.providers.Web3Provider(window.ethereum);\n  const value = 2000000; // sats\n\n  const burnAndRelease = await new RenJS("testnet").burnAndRelease({\n    asset: "BTC",\n    to: Bitcoin().Address("miMi2VET41YV1j6SDNTeZoPBbmH8B4nEx6"),\n    from: Ethereum(provider.provider).Account({ value }),\n  });\n\n  await burnAndRelease.burn();\n  await burnAndRelease.release();\n};\n\nburn().catch(console.error);\n')),Object(i.mdx)("hr",null),Object(i.mdx)("p",null,"For more details on all Gateway contracts, check out the ",Object(i.mdx)("a",{parentName:"p",href:"../contracts/deployments"},"deployed contracts page"),"."),Object(i.mdx)("hr",null))}u.isMDXComponent=!0},488:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return u})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return h})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return l}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){return function(n){var t=p(n.components);return o.a.createElement(e,a({},n,{components:t}))}},p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),l=r,m=u["".concat(a,".").concat(l)]||u[l]||f[l]||i;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);