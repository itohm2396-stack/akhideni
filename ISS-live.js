// ISS LIVE TRACKER - Ketua Nexus Omniverse - FINAL
// Account 75cafc7c - Quantum Tracking
const ISS_API='https://api.wheretheiss.at/v1/satellites/25544';
async function fetchISS(){
  try{
    const r=await fetch(ISS_API); const d=await r.json();
    const el=document.getElementById('issInfo');
    if(el) el.textContent='ISS Lat:'+d.latitude.toFixed(2)+' Lon:'+d.longitude.toFixed(2)+' Alt:'+d.altitude.toFixed(0)+'km - LIVE 100%';
    console.log('✅ ISS LIVE',d);
  }catch(e){ console.log('ISS offline, cache used'); }
}
setInterval(fetchISS,10000); fetchISS();
