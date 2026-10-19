// Upload Hub - Ketua Nexus Omniverse - FINAL PERFECT FIXED
// Triple Fallback: 1. input hidden opacity 0.01 2. label for 3. button onclick click()
// Permissions-Policy camera=(self) microphone=(self) in _headers 604B - FIXED
// Account 75cafc7c - SEABANK 901985950786
function setupUploadHub(){
  const inputs=['camInput','galleryInput','videoInput','allInput','warungInput'];
  inputs.forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    // Fix 1: Ensure z-index button 20 input 1 not covering card
    el.style.zIndex='2'; el.style.opacity='0.01';
    const label=document.querySelector('label[for="'+id+'"]');
    if(label){ label.style.zIndex='1'; label.style.position='relative'; }
    // Fix 2: Triple fallback click
    const fallbackBtn=el.parentElement?.querySelector('button');
    if(fallbackBtn){ fallbackBtn.style.zIndex='20'; fallbackBtn.onclick=()=>el.click(); }
    console.log('✅ Upload Input Fixed:',id);
  });
}
// Auto init
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setupUploadHub);
else setupUploadHub();
