"use strict";var precacheConfig=[["/index.html","ec77c434a72ebeb6905b673bbc64ccaa"],["/static/js/main.1d2c9c19.js","63e224c55dd36896cb58f36a7e285086"],["/static/media/404.ce1ff143.png","ce1ff1434027303f490c34eb9fb177da"],["/static/media/GT-Sectra-Fine-Bold-Italic.3b0eeb70.ttf","3b0eeb70359744a0c88f33d7897a1b96"],["/static/media/GT-Sectra-Fine-Bold-Italic.4e92bb16.woff","4e92bb1660e5d9fccb8ba1e3af41257f"],["/static/media/GT-Sectra-Regular.50d9d7de.woff","50d9d7dee4693051e0d30889c30e44f9"],["/static/media/GT-Sectra-Regular.ad948de8.ttf","ad948de8a025069ba3f8933a4dc6492f"],["/static/media/Gotham-Medium.74f30359.woff","74f303593a6818e71c759d080f616b0a"],["/static/media/Gotham-Medium.97e8834b.otf","97e8834bebe96a8fa1619ec616401344"],["/static/media/aboutHeader.d6b31c05.png","d6b31c058931cf544fd5dc64b95fa0b9"],["/static/media/blogHeader.4cf88e51.png","4cf88e5133b9364c9b2e51aed9f58b9f"],["/static/media/headerImg.a5f4886f.png","a5f4886fcf215f0110090a52f9efd191"],["/static/media/sponsorChela.6b64979d.png","6b64979d78f17da53f060b35903a0a47"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});