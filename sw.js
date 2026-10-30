const CACHE='mathmaster-static-v3';
const CORE=['/','/index.html','/mm-prd.js','/math-studio.js','/manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('mathmaster-static-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==location.origin)return;if(url.pathname.startsWith('/api/'))return;event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok&&['basic','default'].includes(res.type)){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match('/index.html'))))});
