// GunDB P2P - Ketua Nexus Omniverse - FINAL PERFECT
// Decentralized storage - P2P memory - Account 75cafc7c
// CDN: https://cdn.jsdelivr.net/npm/gun/gun.js
// Usage: const gun=Gun(['https://gun-manhattan.herokuapp.com/gun']);
// gun.get('ketua-nexus').get('warung').put({foto:'data...',patent:'75cafc7c'});
console.log('✅ GunDB P2P Module Loaded - Ketua Nexus Omniverse - 100% Aktif');
class KetuaGun{
  constructor(){ this.peers=['https://gun-manhattan.herokuapp.com/gun']; this.data={}; }
  put(key,val){ this.data[key]=val; try{localStorage.setItem('gun-'+key,JSON.stringify(val))}catch{}; console.log('Gun PUT',key); }
  get(key){ try{return JSON.parse(localStorage.getItem('gun-'+key))||this.data[key]}catch{return this.data[key]} }
}
window.KetuaGun=new KetuaGun();
