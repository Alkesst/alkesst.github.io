"use strict";var precacheConfig=[["/index.html","3961fc074642bc21f699c9889f2926f8"],["/static/css/main.6ae9ac46.css","6de2831917a185f776ffb75c307e0bf0"],["/static/js/main.a8a55ff1.js","e7c4e361d844f50cdd701f89b88d8e17"],["/static/media/Dev-Chat demo.5a86de1b.png","5a86de1b57bdb91988506d565a159562"],["/static/media/Dev-Chat demo2.baa4afef.png","baa4afef9c78e7272947afb0b53caaff"],["/static/media/Dev-Chat demo3.c8f789ec.png","c8f789ece1311f40ebd7a302d3623161"],["/static/media/Dev-Chat.6ab19289.png","6ab19289456979621c4372c0f78befb4"],["/static/media/Octocat.e0ffc855.png","e0ffc855d724b37eb78a63802a75a42d"],["/static/media/firstWan.0dc11509.png","0dc115099fae0fd61752197e8e71f362"],["/static/media/profPhoto1.0fb926f5.jpg","0fb926f5cc8158edbeaedb9051aaf230"],["/static/media/profPhoto2.dc058801.jpg","dc058801ce79fc8f4042d071723bc478"],["/static/media/pytel.910f2264.png","910f2264ac9d0a1a3f306ba7755045ca"],["/static/media/pytweBot.499437f8.png","499437f81ae8cc8abf20da61dd326f2b"],["/static/media/redditLogo.e5d2ad17.png","e5d2ad172bd5b686bed278380626bb8d"],["/static/media/telegramLogo.f99768fe.png","f99768febd898be4f446037e8b214c4e"],["/static/media/twitterLogo.2451ce30.png","2451ce303795b690a648060a3d42d925"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});