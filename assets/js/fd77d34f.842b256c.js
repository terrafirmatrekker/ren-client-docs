(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{407:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return x})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return f})),a.d(t,"ContractItem",(function(){return y})),a.d(t,"AssetItem",(function(){return u})),a.d(t,"default",(function(){return E}));var d=a(3),s=a(8),n=a(0),r=a.n(n),c=a(487),m=a(526),o=a.n(m),l=a(527),i=a.n(l),b=a(488),x={title:"Deployments"},p={unversionedId:"deployments",id:"deployments",isDocsHomePage:!1,title:"Deployments",description:"{name}",source:"@site/contracts/deployments.mdx",slug:"/deployments",permalink:"/ren-client-docs/contracts/deployments",version:"current",sidebar:"contracts",previous:{title:"Contracts",permalink:"/ren-client-docs/contracts/"},next:{title:"Proof of Reserve",permalink:"/ren-client-docs/contracts/proof-of-reserve"}},f=[{value:"Darknode contracts",id:"darknode-contracts",children:[]},{value:"Gateway contracts",id:"gateway-contracts",children:[]}],y=function(e){var t=e.name,a=e.link,d=e.address;return Object(c.mdx)("li",{style:{padding:0,margin:0}},Object(c.mdx)("div",{style:{border:"1px solid #eee",padding:10,marginBottom:2}},Object(c.mdx)("b",null,t),Object(c.mdx)("br",null),Object(c.mdx)("a",{href:a+"{address}"},d)))},u=function(e){var t=e.symbol,a=e.link,d=e.erc20,s=e.gateway,n=e.standard,m=e.decimals;return Object(c.mdx)("li",{style:{padding:0,margin:0}},Object(c.mdx)("div",{style:{border:"1px solid #eee",padding:10,marginBottom:2}},Object(c.mdx)("b",null,t,void 0!==m?Object(c.mdx)("span",{style:{opacity:.8,fontWeight:300}}," ","(",m," decimals)"):null),Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)("li",null,n||Object(c.mdx)(r.a.Fragment,null,"ERC20"),":"," ",Object(c.mdx)("a",{href:""+a+d},d)),Object(c.mdx)("li",null,"Gateway: ",Object(c.mdx)("a",{href:""+a+s},s)))))},C={toc:f,ContractItem:y,AssetItem:u};function E(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.mdx)("wrapper",Object(d.default)({},C,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(b.DocTag,{type:b.DocType.Reference,mdxType:"DocTag"}),Object(c.mdx)("h2",{id:"darknode-contracts"},"Darknode contracts"),Object(c.mdx)("p",null,"The darknode contracts, deployed to Ethereum, are responsible for managing darknode registration and darknode rewards. Darknode rewards are currently undergoing an update that will move them from Ethereum to RenVM."),Object(c.mdx)("p",null,"Networks in (brackets) are testnet networks."),Object(c.mdx)(o.a,{defaultValue:"ethereum",values:[{label:"Ethereum",value:"ethereum"},{label:"(Ethereum Testnet - Kovan)",value:"kovan"}],mdxType:"Tabs"},Object(c.mdx)(i.a,{value:"ethereum",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"Protocol",link:"https://etherscan.io/address/",address:"0xc25167ffa19b4d9d03c7d5aa4682c7063f345b66",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodeRegistry",link:"https://etherscan.io/address/",address:"0x2D7b6C95aFeFFa50C068D50f89C5C0014e054f0A",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodeRegistryStore",link:"https://etherscan.io/address/",address:"0x60Ab11FE605D2A2C3cf351824816772a131f8782",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodePayment",link:"https://etherscan.io/address/",address:"0x098e1708b920EFBdD7afe33Adb6a4CBa30c370B9",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodePaymentStore",link:"https://etherscan.io/address/",address:"0xE33417797d6b8Aec9171d0d6516E88002fbe23E7",mdxType:"ContractItem"}))),Object(c.mdx)(i.a,{value:"kovan",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"Protocol",link:"https://kovan.etherscan.io/address/",address:"0x59e23c087cA9bd9ce162875811CD6e99134D6d0F",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodeRegistry",link:"https://kovan.etherscan.io/address/",address:"0x9954C9F839b31E82bc9CA98F234313112D269712",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodeRegistryStore",link:"https://kovan.etherscan.io/address/",address:"0x9daa16aA19e37f3de06197a8B5E638EC5e487392",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodePayment",link:"https://kovan.etherscan.io/address/",address:"0x023f2e94C3eb128D3bFa6317a3fF860BF93C1616",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"DarknodePaymentStore",link:"https://kovan.etherscan.io/address/",address:"0x0EC73cCDCd8e643d909D0c4b663Eb1B2Fb0b1e1C",mdxType:"ContractItem"})))),Object(c.mdx)("p",null,"Source: ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/darknode-sol/blob/master/migrations/networks.js"},"darknode-sol/blob/master/migrations/networks.js"),"."),Object(c.mdx)("h2",{id:"gateway-contracts"},"Gateway contracts"),Object(c.mdx)("p",null,"The gateway contracts, deployed to every host-chain supported by RenVM, are responsible for mints and burns.\nCurrently, they are all EVM-based contracts."),Object(c.mdx)(o.a,{defaultValue:"ethereum",values:[{label:"Ethereum",value:"ethereum"},{label:"Binance Smart Chain",value:"bsc"},{label:"Fantom",value:"fantom"},{label:"Polygon",value:"polygon"},{label:"Avalanche",value:"avalanche"},{label:"(Ethereum Testnet - Kovan)",value:"kovan"},{label:"(BSC Testnet)",value:"bsc-testnet"}],mdxType:"Tabs"},Object(c.mdx)(i.a,{value:"ethereum",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://etherscan.io/address/",address:"0xe80d347DF1209a76DD9d2319d62912ba98C54DDD",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://etherscan.io/address/",address:"0x32666B64e9fD0F44916E1378Efb2CFa3B3B96e80",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renBTC",erc20:"0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",gateway:"0xCc4FF5b8A4A7adb35F00ff0CBf53784e07c3C52F",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renZEC",erc20:"0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",gateway:"0xc3BbD5aDb611dd74eCa6123F05B18acc886e122D",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renBCH",erc20:"0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",gateway:"0xCc4FF5b8A4A7adb35F00ff0CBf53784e07c3C52F",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renFIL",erc20:"0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",gateway:"0xED7D080AA1d2A4D468C615a5d481125Bb56BF1bf",decimals:18,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renDOGE",erc20:"0xe3Cb486f3f5C639e98cCBaF57d95369375687F80",gateway:"0x05387a10Bb3EF789b6C2a9CE2d6C21D5a8c6B1aA",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renDGB",erc20:"0x3832d2F059E55934220881F831bE501D180671A7",gateway:"0x2362843745615368F4ef0A43D7502353649C0783",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://etherscan.io/address/",symbol:"renLUNA",erc20:"0x52d87F22192131636F93c5AB18d0127Ea52CB641",gateway:"0xD7D7Deab930B6d3f98b35A26a4c431630d5AB874",decimals:6,mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"bsc",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://bscscan.com/address/",address:"0x21C482f153D0317fe85C60bE1F7fa079019fcEbD",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://bscscan.com/address/",address:"0xAC23817f7E9Ec7EB6B7889BDd2b50e04a44470c5",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renBTC",erc20:"0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",gateway:"0x95De7b32e24B62c44A4C44521eFF4493f1d1fE13",standard:"BEP20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renZEC",erc20:"0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",gateway:"0xfdecB67cE94A22C8e227D17938c3127EA1B47B4E",standard:"BEP20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renBCH",erc20:"0xA164B067193bd119933e5C1e7877421FCE53D3E5",gateway:"0x3023DD075B0291Cd6aDc890A1EBDD6C400595E08",standard:"BEP20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renFIL",erc20:"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",gateway:"0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",standard:"BEP20",decimals:18,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renDOGE",erc20:"0x31a0D1A199631D244761EEba67e8501296d2E383",gateway:"0x7986568375Af35B427f3f51389d73196967C356a",standard:"BEP20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renDGB",erc20:"0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",gateway:"0x06A2C5d79c66268610eEBBca10AFa17092860830",standard:"BEP20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://bscscan.com/address/",symbol:"renLUNA",erc20:"0xc4Ace9278e7E01755B670C0838c3106367639962",gateway:"0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",standard:"BEP20",decimals:6,mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"fantom",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://ftmscan.com/address/",address:"0x21C482f153D0317fe85C60bE1F7fa079019fcEbD",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://ftmscan.com/address/",address:"0xAC23817f7E9Ec7EB6B7889BDd2b50e04a44470c5",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renBTC",erc20:"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",gateway:"0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renZEC",erc20:"0x31a0D1A199631D244761EEba67e8501296d2E383",gateway:"0x7986568375Af35B427f3f51389d73196967C356a",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renBCH",erc20:"0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",gateway:"0x06A2C5d79c66268610eEBBca10AFa17092860830",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renFIL",erc20:"0xc4Ace9278e7E01755B670C0838c3106367639962",gateway:"0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",standard:"ERC20",decimals:18,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renDGB",erc20:"0x2628568509E87c4429fBb5c664Ed11391BE1BD29",gateway:"0x677b23D0ffc82414B063accA197f74d791285952",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renDOGE",erc20:"0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",gateway:"0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://ftmscan.com/address/",symbol:"renLUNA",erc20:"0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",gateway:"0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",standard:"ERC20",decimals:6,mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"polygon",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://explorer.matic.network/address/",address:"0x21C482f153D0317fe85C60bE1F7fa079019fcEbD",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://explorer.matic.network/address/",address:"0xAC23817f7E9Ec7EB6B7889BDd2b50e04a44470c5",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renBTC",erc20:"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",gateway:"0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renZEC",erc20:"0x31a0D1A199631D244761EEba67e8501296d2E383",gateway:"0x7986568375Af35B427f3f51389d73196967C356a",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renBCH",erc20:"0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",gateway:"0x06A2C5d79c66268610eEBBca10AFa17092860830",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renFIL",erc20:"0xc4Ace9278e7E01755B670C0838c3106367639962",gateway:"0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",standard:"ERC20",decimals:18,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renDGB",erc20:"0x2628568509E87c4429fBb5c664Ed11391BE1BD29",gateway:"0x677b23D0ffc82414B063accA197f74d791285952",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renDOGE",erc20:"0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",gateway:"0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://explorer.matic.network/address/",symbol:"renLUNA",erc20:"0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",gateway:"0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",standard:"ERC20",decimals:6,mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"avalanche",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://cchain.explorer.avax.network/address/",address:"0x21C482f153D0317fe85C60bE1F7fa079019fcEbD",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://cchain.explorer.avax.network/address/",address:"0xAC23817f7E9Ec7EB6B7889BDd2b50e04a44470c5",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renBTC",erc20:"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",gateway:"0x05Cadbf3128BcB7f2b89F3dD55E5B0a036a49e20",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renZEC",erc20:"0x31a0D1A199631D244761EEba67e8501296d2E383",gateway:"0x7986568375Af35B427f3f51389d73196967C356a",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renBCH",erc20:"0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",gateway:"0x06A2C5d79c66268610eEBBca10AFa17092860830",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renFIL",erc20:"0xc4Ace9278e7E01755B670C0838c3106367639962",gateway:"0x4d59f628CB8e4670b779eAE22aF0c46DebC06695",standard:"ERC20",decimals:18,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renDGB",erc20:"0x2628568509E87c4429fBb5c664Ed11391BE1BD29",gateway:"0x677b23D0ffc82414B063accA197f74d791285952",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renDOGE",erc20:"0xcE829A89d4A55a63418bcC43F00145adef0eDB8E",gateway:"0x9FB2C0b19A9fee6d02E7Ea861C71503608B64d6A",standard:"ERC20",decimals:8,mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://cchain.explorer.avax.network/address/",symbol:"renLUNA",erc20:"0x7c7DAAF2dB46fEFd067f002a69FD0BE14AeB159f",gateway:"0x731Ea4Ba77fF184d89dBeB160A0078274Acbe9D2",standard:"ERC20",decimals:6,mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"kovan",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://kovan.etherscan.io/address/",address:"0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://kovan.etherscan.io/address/",address:"0x7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renBTC",erc20:"0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f",gateway:"0x55363c0dBf97Ff9C0e31dAfe0fC99d3e9ce50b8A",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renZEC",erc20:"0x42805DA220DF1f8a33C16B0DF9CE876B9d416610",gateway:"0xAACbB1e7bA99F2Ed6bd02eC96C2F9a52013Efe2d",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renBCH",erc20:"0x618dC53e856b1A601119F2Fed5F1E873bCf7Bd6e",gateway:"0x9827c8a66a2259fd926E7Fd92EA8DF7ed1D813b1",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renFIL",erc20:"0xAE2f4e711ca562a07E16939C5dfD40b05C68AEe5",gateway:"0xC9A81412B538A3c190Bc6E537357c09A23D5A90E",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renDOGE",erc20:"0x442412c823884Cb8fa5e6a096b5DadD8BD94e798",gateway:"0x0D3D33790466D67d66cF61C02494B31AB63B9097",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renDGB",erc20:"0xE657dc7A25eB2b5023C16a1C7cfB42c805C1b855",gateway:"0x9302EA4C04c04fe2ca81b1A27c7a9906309b6701",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://kovan.etherscan.io/address/",symbol:"renLUNA",erc20:"0x34CC35cdB6fF0c3db189428ACe45084231664CD0",gateway:"0xFdF1F7bFB789bb06e830EBaC76e6241fcB29B5e1",mdxType:"AssetItem"}))),Object(c.mdx)(i.a,{value:"bsc-testnet",mdxType:"TabItem"},Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0}},Object(c.mdx)(y,{name:"GatewayRegistry",link:"https://testnet.bscscan.com/address/",address:"0x838F881876f53a772D2F8E2f8aa2e4a996431495",mdxType:"ContractItem"}),Object(c.mdx)(y,{name:"BasicAdapter",link:"https://testnet.bscscan.com/address/",address:"0x7de1253A8da6620351ec477b38BdC6a55FCd0f85",mdxType:"ContractItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renBTC",erc20:"0x5eB4F537889eC3C7Ec397F1acB33c70D8C0ee438",gateway:"0x6003FD1C2d4eeDed7cb5E89923AB457d1DE5cE89",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renZEC",erc20:"0xAF787a25241c69ae213A8Ee08a2518D858b32dBd",gateway:"0x7517FadFA7247ffe52d57c78780FfF0662a09936",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renBCH",erc20:"0xD566bB681a231f5648D7cB0f09A89cb47fd09513",gateway:"0x00E094aff24746196Bf73491A4C276fa4db503b4",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renFIL",erc20:"0xE980BC9e17094EB273c6b5A1139b3A30EcdF05e0",gateway:"0xBA7236b2fbe3F12Df15a0d5fcE57d891016822f8",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renDOGE",erc20:"0x8C0248Ab26FcD6868Cc5aaea954f0ce28F8E103f",gateway:"0xd5E7d585D471BaFF2060dAFeaf701ff89114e439",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renDGB",erc20:"0xe8163f31A7a23167D21252Bcc0a996a1A40E7d61",gateway:"0x0c5Efe870916cA7c89c03D742963795Ed7d3C35a",standard:"BEP20",mdxType:"AssetItem"}),Object(c.mdx)(u,{link:"https://testnet.bscscan.com/address/",symbol:"renLUNA",erc20:"0x2c82a39549858A0fF1a369D84695D983791d0786",gateway:"0x26f4F36A070190Ee4379241DD1463A420768EB4B",standard:"BEP20",mdxType:"AssetItem"})))),Object(c.mdx)("p",null,"Source: ",Object(c.mdx)("a",{parentName:"p",href:"https://github.com/renproject/gateway-sol/blob/master/migrations/networks.js"},"gateway-sol/blob/master/migrations/networks.js"),"."))}E.isMDXComponent=!0},487:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return l})),a.d(t,"MDXProvider",(function(){return x})),a.d(t,"mdx",(function(){return y})),a.d(t,"useMDXComponents",(function(){return b})),a.d(t,"withMDXComponents",(function(){return i}));var d=a(0),s=a.n(d);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])}return e}).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,d,s=function(e,t){if(null==e)return{};var a,d,s={},n=Object.keys(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),i=function(e){return function(t){var a=b(t.components);return s.a.createElement(e,r({},t,{components:a}))}},b=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},x=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var a=e.components,d=e.mdxType,n=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=b(a),i=d,x=l["".concat(r,".").concat(i)]||l[i]||p[i]||n;return a?s.a.createElement(x,m(m({ref:t},c),{},{components:a})):s.a.createElement(x,m({ref:t},c))}));function y(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var n=a.length,r=new Array(n);r[0]=f;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:d,r[1]=c;for(var o=2;o<n;o++)r[o]=a[o];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},488:function(e,t,a){"use strict";var d=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var s=d(a(0));let n;t.DocType=n,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(n||(t.DocType=n={}));const r={[n.Tutorial]:"#b16bfc",[n.HowTo]:"#EC0088",[n.Reference]:"#ff823a",[n.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:{border:"2px solid "+r[e]||!1,borderRadius:"5px",color:r[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},490:function(e,t,a){"use strict";function d(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=d(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}a.r(t),t.default=function(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=d(e))&&(s&&(s+=" "),s+=t);return s}},508:function(e,t,a){"use strict";var d=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(0),n=d(a(511));var r=function(){const e=(0,s.useContext)(n.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=r},511:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=(0,a(0).createContext)(void 0);t.default=d},526:function(e,t,a){"use strict";var d=a(4).default,s=a(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=d(a(508)),c=d(a(490)),m=d(a(446));const o=37,l=39;var i=function(e){const{lazy:t,block:a,defaultValue:d,values:s,groupId:i,className:b}=e,{tabGroupChoices:x,setTabGroupChoices:p}=(0,r.default)(),[f,y]=(0,n.useState)(d),u=n.Children.toArray(e.children),C=[];if(null!=i){const e=x[i];null!=e&&e!==f&&s.some((t=>t.value===e))&&y(e)}const E=e=>{const t=e.target,a=C.indexOf(t),d=u[a].props.value;y(d),null!=i&&(p(i,d),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:d,right:s}=e.getBoundingClientRect(),{innerHeight:n,innerWidth:r}=window;return t>=0&&s<=r&&d<=n&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m.default.tabItemActive),setTimeout((()=>t.classList.remove(m.default.tabItemActive)),2e3))}),150))},A=e=>{var t;let a;switch(e.keyCode){case l:{const t=C.indexOf(e.target)+1;a=C[t]||C[0];break}case o:{const t=C.indexOf(e.target)-1;a=C[t]||C[C.length-1];break}}null===(t=a)||void 0===t||t.focus()};return n.default.createElement("div",{className:"tabs-container"},n.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":a},b)},s.map((({value:e,label:t})=>n.default.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,c.default)("tabs__item",m.default.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>C.push(e),onKeyDown:A,onFocus:E,onClick:E},t)))),t?(0,n.cloneElement)(u.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.default.createElement("div",{className:"margin-vert--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))};t.default=i},527:function(e,t,a){"use strict";var d=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=d(a(0));var n=function({children:e,hidden:t,className:a}){return s.default.createElement("div",{role:"tabpanel",hidden:t,className:a},e)};t.default=n}}]);