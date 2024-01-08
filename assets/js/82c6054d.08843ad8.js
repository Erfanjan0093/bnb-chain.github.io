"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(p,".").concat(h)]||d[h]||b[h]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"RPC"},o="RPC Endpoint",s={unversionedId:"beaconchain/develop/rpc",id:"beaconchain/develop/rpc",title:"RPC Endpoint",description:"RPC endpoints may be used to interact with a node directly over HTTP or websockets. Using RPC, you may perform low-level operations like executing ABCI queries, viewing network/consensus state or broadcasting a transaction.",source:"@site/docs/beaconchain/develop/rpc.md",sourceDirName:"beaconchain/develop",slug:"/beaconchain/develop/rpc",permalink:"/docs/beaconchain/develop/rpc",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/rpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"RPC"},sidebar:"bscSideBar",previous:{title:"Encoding Examples",permalink:"/docs/beaconchain/learn/encoding/amino-example"},next:{title:"Install Binaries",permalink:"/docs/beaconchain/develop/node/install"}},p={},l=[{value:"Mainnet",id:"mainnet",level:2},{value:"Testnet",id:"testnet",level:2}],c={toc:l},d="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rpc-endpoint"},"RPC Endpoint"),(0,r.kt)("p",null,"RPC endpoints may be used to interact with a node directly over HTTP or websockets. Using RPC, you may perform low-level operations like executing ABCI queries, viewing network/consensus state or broadcasting a transaction."),(0,r.kt)("h2",{id:"mainnet"},"Mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed1.bnbchain.org:443"},"https://dataseed1.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed2.bnbchain.org:443"},"https://dataseed2.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed3.bnbchain.org:443"},"https://dataseed3.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed4.bnbchain.org:443"},"https://dataseed4.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed1.defibit.io:443"},"https://dataseed1.defibit.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed2.defibit.io:443"},"https://dataseed2.defibit.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed3.defibit.io:443"},"https://dataseed3.defibit.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed4.defibit.io:443"},"https://dataseed4.defibit.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed1.ninicoin.io:443"},"https://dataseed1.ninicoin.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed2.ninicoin.io:443"},"https://dataseed2.ninicoin.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed3.ninicoin.io:443"},"https://dataseed3.ninicoin.io:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dataseed4.ninicoin.io:443"},"https://dataseed4.ninicoin.io:443"))),(0,r.kt)("h2",{id:"testnet"},"Testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://data-seed-pre-0-s1.bnbchain.org:443"},"https://data-seed-pre-0-s1.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://data-seed-pre-1-s1.bnbchain.org:443"},"https://data-seed-pre-1-s1.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://data-seed-pre-2-s1.bnbchain.org:443"},"https://data-seed-pre-2-s1.bnbchain.org:443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://data-seed-pre-0-s3.bnbchain.org:443"},"https://data-seed-pre-0-s3.bnbchain.org:443"))))}b.isMDXComponent=!0}}]);