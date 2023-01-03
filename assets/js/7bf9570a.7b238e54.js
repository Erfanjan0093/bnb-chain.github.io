"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=s,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(b,a(a({ref:n},p),{},{components:t})):o.createElement(b,a({ref:n},p))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66174:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>a,metadata:()=>c,toc:()=>i,default:()=>p});var o=t(87462),s=(t(67294),t(3905));const r={},a="WebSocket Connections",c={unversionedId:"beaconchain/develop/api-reference/dex-api/ws-connection",id:"beaconchain/develop/api-reference/dex-api/ws-connection",isDocsHomePage:!1,title:"WebSocket Connections",description:"Several data streams are exposed over standard WebSocket connections, which can be consumed by modern web browsers and server-side WebSocket libraries.",source:"@site/docs/beaconchain/develop/api-reference/dex-api/ws-connection.md",sourceDirName:"beaconchain/develop/api-reference/dex-api",slug:"/beaconchain/develop/api-reference/dex-api/ws-connection",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-connection",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/api-reference/dex-api/ws-connection.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Staking API",permalink:"/docs/beaconchain/develop/api-reference/dex-api/staking"},next:{title:"WebSocket Streams",permalink:"/docs/beaconchain/develop/api-reference/dex-api/ws-streams"}},i=[{value:"Method 1: Connect with stream names in the URL",id:"method-1-connect-with-stream-names-in-the-url",children:[],level:3},{value:"Method 2: Subscribe to streams on demand",id:"method-2-subscribe-to-streams-on-demand",children:[],level:3}],l={toc:i};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"websocket-connections"},"WebSocket Connections"),(0,s.kt)("p",null,"Several data streams are exposed over standard WebSocket connections, which can be consumed by modern web browsers and server-side WebSocket libraries."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The base endpoint for mainnet is: ",(0,s.kt)("strong",{parentName:"li"},"wss://dex.binance.org/api/"),"."),(0,s.kt)("li",{parentName:"ul"},"The base endpoint for testnet is: ",(0,s.kt)("strong",{parentName:"li"},"wss://testnet-dex.binance.org/api/"),"."),(0,s.kt)("li",{parentName:"ul"},"Each connection can consume a single stream or multiple streams may be multiplexed through one connection for more complex apps."),(0,s.kt)("li",{parentName:"ul"},"All symbols in stream names are lowercase.")),(0,s.kt)("p",null,"Stream names may be provided in the URL ",(0,s.kt)("strong",{parentName:"p"},"or")," there is a mechanism to ",(0,s.kt)("inlineCode",{parentName:"p"},"subscribe")," to consume streams on demand through one connection."),(0,s.kt)("p",null,"Note: Once the connection is established, the websocket server will send ping frame to the client every 30 seconds. The client should reply with pong frame in time (this has already been implemented by most modern browsers, but programmatical users need to be aware of whether your websocket library supports this), otherwise, the connection might be closed."),(0,s.kt)("p",null,"Examples of each of these methods are provided below in JavaScript:"),(0,s.kt)("h3",{id:"method-1-connect-with-stream-names-in-the-url"},"Method 1: Connect with stream names in the URL"),(0,s.kt)("p",null,"Using this method, stream names are specified in the URLs used to connect to the data streams:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Single streams ",(0,s.kt)("inlineCode",{parentName:"li"},"/ws/<streamName>"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Mainnet Example:")," Various methods of connecting to streams where stream names are provided in URLs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'  // for personal streams, ex: Account & Transfers\n  const accountAndOrdersFeeds = new WebSocket("wss://dex.binance.org/api/ws/<USER_ADDRESS>");\n\n  // for all symbols\n  const blockHeight = new WebSocket("wss://dex.binance.org/api/ws/$all@blockheight");\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testnet Example:")," Various methods of connecting to streams where stream names are provided in URLs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'  // for personal streams, ex: Account & Transfers\n  const accountAndOrdersFeeds = new WebSocket("wss://testnet-dex.binance.org/api/ws/<USER_ADDRESS>");\n\n  // for all symbols\n  const blockHeight = new WebSocket("wss://testnet-dex.binance.org/api/ws/$all@blockheight");\n')),(0,s.kt)("h3",{id:"method-2-subscribe-to-streams-on-demand"},"Method 2: Subscribe to streams on demand"),(0,s.kt)("p",null,"Using this method, streams are be consumed via subscribe and unsubscribe commands, sent through a single WebSocket connection."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: one connection is only allowed to subscribe to one address.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"    const conn = new WebSocket(\"wss://dex.binance.org/api/ws\");\n    conn.onopen = function(evt) {\n        // send Subscribe/Unsubscribe messages here (see below)\n    }\n    conn.onmessage = function(evt) {\n        console.info('received data', evt.data);\n    };\n    conn.onerror = function(evt) {\n        console.error('an error occurred', evt.data);\n    };\n")),(0,s.kt)("p",null,"After connecting successfully you can subscribe/unsubscribe to different topics."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")," To subscribe to transfer events, you should send a socket message with the ",(0,s.kt)("inlineCode",{parentName:"p"},"subscribe")," payload as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'    const conn = new WebSocket("wss://dex.binance.org/api/ws/bnb17zw3mqjx64x4dxtwqjqz5tssql6qp2m0cgv06x");\n    conn.onopen = function(evt) {\n        // for personal topics such as accounts & transfers, an `address` is required\n        // Note: one connection is only allowed to subscribe to one address.\n        // If you subscribe to a new address, regardless of whether the topic is new, the subscriptions for the previous addresses will be removed.\n        conn.send(JSON.stringify({ method: "subscribe", topic: "transfers", address: "bnb17zw3mqjx64x4dxtwqjqz5tssql6qp2m0cgv06x" }));\n    }\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")," To unsubscribe from orders events, you should send a socket message with payloads as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'    // unsubscribe from topic\n    conn.send(JSON.stringify({ method: "unsubscribe", topic: "transfers" }));\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")," To extend connection life, you should send a message with a payload using the ",(0,s.kt)("inlineCode",{parentName:"p"},"keepAlive")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'    // This will extend the connection time to another 30 minutes\n    // It\'s good to send this message every 30 minutes to maintain the connection life\n    conn.send(JSON.stringify({ method: "keepAlive" }));\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")," To close a connection, you should send a socket message with a payload as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'    // Connections will auto close after 30 - 60 minutes if no "keepAlive" messages received\n    // Connections with no subscriptions will be closed, regardless the keepAlive messages.\n    conn.send(JSON.stringify({ method: "close" }));\n')))}p.isMDXComponent=!0}}]);