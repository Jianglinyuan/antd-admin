"use strict";var precacheConfig=[["/static/common-umi.5d695eee.async.js","ea0a26e32f39127d3e38ca2582396c7c"],["/static/public/antd/iconfont.eot","da59b3e69b878c9490fb7d7bc65761b0"],["/static/public/antd/iconfont.svg","f876b6a3ea1f4a97d8e118654b4a8984"],["/static/public/antd/iconfont.ttf","a40b6b285526376dbeb09b6cb766b932"],["/static/public/antd/iconfont.woff","524781dfef675a4af82dd14fd6f9e12f"],["/static/public/assets/data-1491837999815-H1_44Qtal.jpg","aeaf4baf39d92959fd8df932680d0583"],["/static/public/assets/data-1493804606544-r1PBU7D1W.jpg","8ee94bb42aefc55ff09a156d213a2c30"],["/static/public/assets/data-1493804610896-SJoBIXPkW.jpg","428f87aa6b9093819c101504e654a35d"],["/static/public/iconfont.css","de42d6f112ffff329c55483377fde8ea"],["/static/public/iconfont.eot","cce1d8da29d5174cfbdd736d34cb5870"],["/static/public/iconfont.js","9a23037efc3329ba0720fa383157602a"],["/static/public/iconfont.svg","d9d4c9a3ed42a5a588895e9cac80d554"],["/static/public/iconfont.ttf","1e86a8a2393a4dbf5925d7250eb352ba"],["/static/public/iconfont.woff","e20e7113faba051ae25bb3c425070ab0"],["/static/public/logo.svg","b29324c45ced02ca418e097ae8f52c77"],["/static/src__layouts__index.1c28f23b.async.js","bc8878d22190857206856c5c4967198c"],["/static/src__pages__404.1625963d.async.js","50913216d758364088e68fd57c8c97a0"],["/static/src__pages__UIElement__dataTable__index.0bc3b9b1.async.js","9856960121fbc630b27631378cbcb540"],["/static/src__pages__UIElement__dropOption__index.4058e51b.async.js","a1ad4c86fcfed9d453436562532fc5fd"],["/static/src__pages__UIElement__editor__index.6d8bd616.async.js","e382df2cc682674ce212588756478006"],["/static/src__pages__UIElement__iconfont__emoji.4cbb6d13.async.js","7ac8ee7116319c3e72fafd424e39d59d"],["/static/src__pages__UIElement__iconfont__index.f459aa69.async.js","af19c73027d9f0a6fa2e77993cdb2532"],["/static/src__pages__UIElement__layer__index.16662c34.async.js","df6a7f9a4428398b20482578bd200529"],["/static/src__pages__UIElement__search__index.096eaf8b.async.js","ccbd2253ba6881a3da2689d50ef56914"],["/static/src__pages__chart__ECharts__page.2af8f1b9.async.js","423ce49b5a6400aaa0fdf2d08aae0c82"],["/static/src__pages__chart__Recharts__page.41d03275.async.js","1899c454e1ef9e141b1e8b1ca9d26157"],["/static/src__pages__chart__highCharts__page.ad5a0233.async.js","ca205867100289fb5e207261f2b78695"],["/static/src__pages__dashboard__index.68c6b8f2.async.js","3269be9c4b9e2bae3cb34b1cdbeea9bb"],["/static/src__pages__dashboard__model.js.00203f17.async.js","a595b70202e26ccc371b527233d64989"],["/static/src__pages__index.023c0e35.async.js","78627d52aa8ab368ee90eb845963d507"],["/static/src__pages__login__index.d7ecd5ad.async.js","5c2abcf0f5b99de52d7953e55397d95d"],["/static/src__pages__login__model.js.fd49dc20.async.js","2248c978a78d35942f4deaa8182dead0"],["/static/src__pages__post__index.abbcf1f6.async.js","c2568a075f9ee309576cc1b7a73eb02d"],["/static/src__pages__post__model.js.9f264802.async.js","4341f3f8047c403c8ae53ab8ade91c30"],["/static/src__pages__request__index.9cdf7f81.async.js","58e44f1a8b468f8fdd980de8432a3b70"],["/static/src__pages__user__$id__index.05bd4c06.async.js","360245242aa93deaeb3a4f8d81e883cb"],["/static/src__pages__user__$id__models__detail.js.5900304d.async.js","3939f42323ee90ac536aeee8f91af7e3"],["/static/src__pages__user__index.ac57896b.async.js","af9fe26b6e7cbfca728907c25d1d201f"],["/static/src__pages__user__model.js.a1b61700.async.js","30f2c04b070f7e20caeca5df861e836b"],["/static/static/user-background.c7e0e950.png","c7e0e950eb3fe55fe7462c584162a36a"],["/static/umi.9731879d.js","181341d9673e2f9f89bb477e18f9dc55"],["/static/umi.da58ecaf.css","da58ecaf0141c5aaea87c48c28ca0d48"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});