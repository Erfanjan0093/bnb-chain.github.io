"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[276],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61819:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>s,toc:()=>i,default:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},c="WebSocket Streams",s={unversionedId:"beaconchain/develop/api-reference/dex-api/ws-streams",id:"beaconchain/develop/api-reference/dex-api/ws-streams",isDocsHomePage:!1,title:"WebSocket Streams",description:"1. Account",source:"@site/docs/beaconchain/develop/api-reference/dex-api/ws-streams.md",sourceDirName:"beaconchain/develop/api-reference/dex-api",slug:"/beaconchain/develop/api-reference/dex-api/ws-streams",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-streams",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/api-reference/dex-api/ws-streams.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"WebSocket Connections",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-connection"},next:{title:"Node RPC",permalink:"/docs/beaconchain/develop/api-reference/node-rpc"}},i=[{value:"1. Account",id:"1-account",children:[],level:3},{value:"2. Transfer",id:"2-transfer",children:[],level:3},{value:"3. Blockheight",id:"3-blockheight",children:[],level:3}],l={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket-streams"},"WebSocket Streams"),(0,a.kt)("h3",{id:"1-account"},"1. Account"),(0,a.kt)("p",null,"Return account updates."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic Name:")," accounts | Stream: /ws/address"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mainnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const accountAndOrderAndTransfers = new WebSocket("wss://dex.binance.org/api/ws/bnb1m4m9etgf3ca5wpgkqe5nr6r33a4ynxfln3yz4v");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "accounts", address: "bnb1m4m9etgf3ca5wpgkqe5nr6r33a4ynxfln3yz4v" }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Testnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const accountAndOrderAndTransfers = new WebSocket("wss://testnet-dex.binance.org/api/ws/tbnb1qtuf578qs9wfl0wh3vs0r5nszf80gvxd28hkrc");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://testnet-dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "accounts", address: "tbnb1qtuf578qs9wfl0wh3vs0r5nszf80gvxd28hkrc" }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Received Payload:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "stream": "accounts",\n    "data": [{\n      "e": "outboundAccountInfo",   // Event type\n      "E": 1499405658849,           // Event height\n      "B": [                        // Balances array\n        {\n          "a": "LTC",               // Asset\n          "f": "17366.18538083",    // Free amount\n          "l": "0.00000000",        // Locked amount\n          "r": "0.00000000"         // Frozen amount\n        },\n        {\n          "a": "BTC",\n          "f": "10537.85314051",\n          "l": "2.19464093",\n          "r": "0.00000000"\n        },\n        {\n          "a": "ETH",\n          "f": "17902.35190619",\n          "l": "0.00000000",\n          "r": "0.00000000"\n        }\n      ]\n    }]\n}\n')),(0,a.kt)("h3",{id:"2-transfer"},"2. Transfer"),(0,a.kt)("p",null,"Return transfer updates if address is involved (as sender or receiver) in a transfer. Multisend is also covered"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic Name:")," transfers | Stream: /ws/address"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mainnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const accountAndOrderAndTransfers = new WebSocket("wss://dex.binance.org/api/ws/bnb1z220ps26qlwfgz5dew9hdxe8m5malre3qy6zr9");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "transfers", address: "bnb1z220ps26qlwfgz5dew9hdxe8m5malre3qy6zr9" }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Testnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const accountAndOrderAndTransfers = new WebSocket("wss://testnet-dex.binance.org/api/ws/tbnb1c346qk3yfk89lzcacwzxsx402rv25gu6v40ghf");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://testnet-dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "transfers", address: "tbnb1c346qk3yfk89lzcacwzxsx402rv25gu6v40ghf" }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Received Payload:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "stream": "transfers",\n  "data": {\n    "e":"outboundTransferInfo",                                                // Event type\n    "E":12893,                                                                 // Event height\n    "H":"0434786487A1F4AE35D49FAE3C6F012A2AAF8DD59EC860DC7E77123B761DD91B",    // Transaction hash\n    "M":"123456789",                                                           // Transaction memo, added for BEP39\n    "f":"bnb1z220ps26qlwfgz5dew9hdxe8m5malre3qy6zr9",                          // From addr\n    "t":\n      [{\n        "o":"bnb1xngdalruw8g23eqvpx9klmtttwvnlk2x4lfccu",                      // To addr\n        "c":[{                                                                 // Coins\n          "a":"BNB",                                                           // Asset\n          "A":"100.00000000"                                                   // Amount\n          }]\n      }]\n  }\n}\n\n')),(0,a.kt)("h3",{id:"3-blockheight"},"3. Blockheight"),(0,a.kt)("p",null,"Streams the latest block height."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic Name:")," blockheight | Stream: $all@blockheight"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mainnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const blockHeights = new WebSocket("wss://dex.binance.org/api/ws/$all@blockheight");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "blockheight", symbols: ["$all"] }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Testnet Connection Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    // URL connection\n    const blockHeights = new WebSocket("wss://testnet-dex.binance.org/api/ws/$all@blockheight");\n\n    // Or Subscribe method\n    const conn = new WebSocket("wss://testnet-dex.binance.org/api/ws");\n    conn.onopen = function(evt) {\n        conn.send(JSON.stringify({ method: "subscribe", topic: "blockheight", symbols: ["$all"] }));\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Received Payload:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "stream": "blockheight",\n  "data": {\n    "h": 123456789,     // Block height\n  }\n}\n')))}p.isMDXComponent=!0}}]);