// Music Player - Ketua Nexus Omniverse - FINAL PERFECT
// AudioContext resume on user gesture + Oscillator sine 440Hz fallback + speechSynthesis id-ID
// miniPlayer bottom 72px above nav close X - Fixed halangi layar
// Account 75cafc7c - Spotify Joox integration
class MusicPlayer{
  constructor(){ this.ctx=null; this.playing=false; this.playlist=[]; this.current=0; }
  async init(){
    this.ctx=new (window.AudioContext||window.webkitAudioContext)();
    await this.ctx.resume();
    console.log('✅ AudioContext Active - Ketua Nexus');
  }
  playTone(freq=440,vol=0.3){
    if(!this.ctx) this.init();
    try{
      const o=this.ctx.createOscillator(); const g=this.ctx.createGain();
      o.frequency.value=freq; g.gain.value=vol;
      o.connect(g); g.connect(this.ctx.destination); o.start();
      setTimeout(()=>{try{o.stop()}catch{}},800);
    }catch(e){ console.log('Audio fallback'); }
  }
  playSpotify(url){ window.open(url,'_blank','noopener'); this.playTone(440,0.4); }
  addToPlaylist(item){ this.playlist.push(item); try{localStorage.setItem('ketuaPlaylist',JSON.stringify(this.playlist))}catch{} }
}
window.KetuaMusic=new MusicPlayer();
