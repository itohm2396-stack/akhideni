const CACHE = 'ketua-nexus-v100-final-perfect-kamera-penyimpanan-aktif';
const FILES = ['./','./index.html','./manifest.json','./foto.jpg','./jual.html','./logo-192.png','./logo-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>{}));
  self.skipWaiting();
  console.log('✅ SW Install FINAL PERFECT');
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
  console.log('✅ SW Activate 100% Aktif');
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
