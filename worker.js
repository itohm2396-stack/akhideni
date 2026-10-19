// Cloudflare Worker - Ketua Nexus Omniverse - Account 75cafc7c
// FINAL PERFECT - KAMERA PENYIMPANAN 100% AKTIF
addEventListener('fetch', event=>{
  event.respondWith(handle(event.request));
});
async function handle(request){
  const url=new URL(request.url);
  if(url.pathname==='/api/patent'){
    return new Response(JSON.stringify({patent:'75cafc7c',status:'Abadi',seabank:'901985950786',wa:'085779007835',active:'100%'}),{headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}});
  }
  return fetch(request);
}
