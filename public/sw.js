if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const f=e=>n(e,a),r={module:{uri:a},exports:t,require:f};s[a]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-128x128.png",revision:"cf291a996adffef01bd5445564b6dec8"},{url:"/icon-144x144.png",revision:"9680b5de32de8f40bb58680f8eb09401"},{url:"/icon-152x152.png",revision:"42b9f0c5e2da026a558a2277724fb40f"},{url:"/icon-192x192.png",revision:"3ee790082a52d693ca9b90bc4105c1c6"},{url:"/icon-384x384.png",revision:"224313332b79164868e150f410ceb8e4"},{url:"/icon-512x512.png",revision:"25b15c4e6e4747b117359f02e8d903ca"},{url:"/icon-72x72.png",revision:"2891e6d99bb23c8740eb4bae359081a0"},{url:"/icon-96x96.png",revision:"289b3c7f7b50c8e697e9b25a9c4ff810"},{url:"/manifest.json",revision:"1f627f6652ea0bc1845e9641a5959457"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/_buildManifest.js",revision:"fec06633b9a2f3208f72c09cb0c16e27"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/pages/_app.js",revision:"4d11eba15eb7ea68e4282dcd62c986a2"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/pages/_error.js",revision:"ebf5bd2e6dfcf15bf994561aced1600f"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/pages/blogs/%5Bslug%5D.js",revision:"a8f2e3b28f055ca33e3517727b6520bf"},{url:"static/Dz7fgDApDfZhCKIEFd3lA/pages/index.js",revision:"1f02dc4ec389491a626a11ed77fb5173"},{url:"static/chunks/6b6cceda9e68d138d5cb3e10b9ea16fc5334fe8c.5acd83c243e0121ed40e.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/chunks/75fc9c18.aeb0187540341b781402.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/chunks/9058fa34bef1436b94d6f8bfc1373feee8bbecf0.e31e85c595d8981f83c0.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/chunks/cb1608f2.6fc5ca13c48aafa1c94e.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/chunks/commons.1fddac36d49d2908b728.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/css/87aa38f102ee3c6f1e8e.css",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/runtime/main-fd3d39dd7076e2a3d7df.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/runtime/polyfills-c08425aef0d34f1d272c.js",revision:"Dz7fgDApDfZhCKIEFd3lA"},{url:"static/runtime/webpack-1c5199ff66550d26e499.js",revision:"Dz7fgDApDfZhCKIEFd3lA"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
