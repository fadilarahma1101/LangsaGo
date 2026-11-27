'use strict';

const destinations = [
  {id:'mangrove',name:'Hutan Mangrove Kuala Langsa',category:'Alam',emoji:'🌳',art:'art-nature',desc:'Jelajahi kawasan mangrove dan suasana pesisir Kuala Langsa.',note:'Wisata alam & pesisir',query:'Hutan Mangrove Kuala Langsa Aceh'},
  {id:'hutan-kota',name:'Taman Hutan Kota',category:'Alam',emoji:'🌿',art:'art-nature',desc:'Ruang hijau untuk menikmati suasana teduh di tengah kota.',note:'Ruang hijau',query:'Taman Hutan Kota Langsa Aceh'},
  {id:'balee-juang',name:'Museum Balee Juang',category:'Budaya',emoji:'🏛️',art:'art-city',desc:'Kenali jejak sejarah dan warisan budaya Kota Langsa.',note:'Sejarah & budaya',query:'Museum Balee Juang Langsa'},
  {id:'masjid',name:'Masjid Agung Darul Falah',category:'Landmark',emoji:'🕌',art:'art-mosque',desc:'Salah satu landmark religi yang dikenal di Kota Langsa.',note:'Landmark religi',query:'Masjid Agung Darul Falah Langsa'},
  {id:'bambu',name:'Taman Bambu Runcing / Lapangan Merdeka',category:'Ruang publik',emoji:'🌴',art:'art-park',desc:'Ruang publik untuk bersantai dan menikmati aktivitas kota.',note:'Ruang publik',query:'Taman Bambu Runcing Lapangan Merdeka Langsa'},
  {id:'commodore',name:'Tugu Simpang Commodore',category:'Landmark',emoji:'📍',art:'art-landmark',desc:'Landmark persimpangan yang menjadi penanda kawasan kota.',note:'Landmark kota',query:'Tugu Simpang Commodore Langsa'}
];
{
  id:'mangrove',
  name:'Hutan Mangrove Kuala Langsa',
  category:'Alam',
  emoji:'🌳',
  art:'art-nature',
  image:'assets/mangrove.jpg',
  desc:'Jelajahi kawasan mangrove dan suasana pesisir Kuala Langsa.',
  note:'Wisata alam & pesisir',
  query:'Hutan Mangrove Kuala Langsa Aceh'
},
{
  id:'hutan-kota',
  name:'Taman Hutan Kota',
  category:'Alam',
  emoji:'🌿',
  art:'art-nature',
  image:'assets/hutan-kota.jpg',
  desc:'Ruang hijau untuk menikmati suasana teduh di tengah Kota Langsa.',
  note:'Ruang hijau',
  query:'Taman Hutan Kota Langsa Aceh'
},
{
  id:'balee-juang',
  name:'Museum Balee Juang',
  category:'Budaya',
  emoji:'🏛️',
  art:'art-culture',
  image:'assets/balee-juang.jpg',
  desc:'Kenali jejak sejarah dan warisan budaya Kota Langsa.',
  note:'Sejarah & budaya',
  query:'Museum Balee Juang Langsa Aceh'
},
{
  id:'masjid',
  name:'Masjid Agung Darul Falah',
  category:'Landmark',
  emoji:'🕌',
  art:'art-landmark',
  image:'assets/masjid.jpg',
  desc:'Kunjungi salah satu ikon religi dan landmark kebanggaan Kota Langsa.',
  note:'Wisata religi',
  query:'Masjid Agung Darul Falah Kota Langsa'
},
{
  id:'bambu-runcing',
  name:'Taman Bambu Runcing',
  category:'Ruang publik',
  emoji:'🎋',
  art:'art-public',
  image:'assets/bambu-runcing.jpg',
  desc:'Nikmati ruang terbuka kota untuk bersantai, berolahraga, dan berkumpul.',
  note:'Ruang publik & olahraga',
  query:'Taman Bambu Runcing Lapangan Merdeka Langsa'
},
{
  id:'commodore',
  name:'Tugu Simpang Commodore',
  category:'Landmark',
  emoji:'📍',
  art:'art-landmark',
  image:'assets/commodore.jpg',
  desc:'Kenali salah satu penanda kawasan dan ikon persimpangan Kota Langsa.',
  note:'Landmark kota',
  query:'Tugu Simpang Commodore Kota Langsa Aceh'
};
const events = [
  {day:'01',month:'AGENDA',title:'Car Free Day',place:'Area pusat kota',kind:'OLAHRAGA & KOMUNITAS',desc:'Contoh agenda aktivitas warga pada akhir pekan.'},
  {day:'02',month:'AGENDA',title:'Bazar UMKM Lokal',place:'Area Lapangan Merdeka',kind:'KULINER & UMKM',desc:'Contoh ruang promosi produk dan kuliner lokal.'},
  {day:'03',month:'AGENDA',title:'Pentas Seni Kota',place:'Ruang publik kota',kind:'BUDAYA',desc:'Contoh kegiatan seni dan budaya masyarakat.'}
];
const tastes = [
  {name:'Kuliner khas Langsa',kind:'Rekomendasi pencarian kuliner',emoji:'🍜',query:'kuliner khas Langsa Aceh'},
  {name:'Kopi & tempat nongkrong',kind:'Kafe dan kedai kopi lokal',emoji:'☕',query:'coffee shop Langsa Aceh'},
  {name:'UMKM dan jajanan lokal',kind:'Jajanan dan produk lokal',emoji:'🥟',query:'UMKM makanan Langsa Aceh'}
];
const routes = {
  alam:{title:'Sehari menyapa alam Langsa',desc:'Urutan kunjungan tematik untuk inspirasi perjalanan. Sesuaikan waktu dan kondisi lapangan.',ids:['mangrove','hutan-kota'],destination:'Hutan Mangrove Kuala Langsa'},
  pusat:{title:'Menyusuri pusat dan sejarah kota',desc:'Rute inspiratif untuk mengenal landmark, sejarah, dan ruang publik.',ids:['balee-juang','masjid','bambu','commodore'],destination:'Museum Balee Juang Langsa'},
  lokal:{title:'Santai menikmati ruang publik',desc:'Pilihan singkat untuk aktivitas santai dan mengenal suasana kota.',ids:['bambu','hutan-kota','commodore'],destination:'Lapangan Merdeka Langsa'}
};
const $ = (selector,root=document) => root.querySelector(selector);
const $$ = (selector,root=document) => [...root.querySelectorAll(selector)];
const grid = $('#destinationGrid');
const toast = $('#toast');
let toastTimer;
function notify(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
}
function safeText(tag,text,className){
  const el=document.createElement(tag);
  if(className) el.className=className;
  el.textContent=text;
  return el;
}
function mapsUrl(query){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query);}
function renderDestinations(category='Semua',term=''){
  grid.replaceChildren();
  const q=term.trim().toLocaleLowerCase('id');
  const filtered=destinations.filter(d=>(category==='Semua'||d.category===category)&&(!q||(d.name+' '+d.category+' '+d.desc).toLocaleLowerCase('id').includes(q)));
  if(!filtered.length){grid.append(safeText('p','Tidak ada destinasi yang cocok. Coba kata kunci lain.','empty-state'));return;}
  filtered.forEach(d=>{
    const card=document.createElement('article');card.className='destination-card';
    const art=safeText('div','',`destination-art ${d.art}`);

const img=document.createElement('img');
img.src=d.image;
img.alt=d.name;
img.loading='lazy';

art.append(img,safeText('span',d.category,'card-category'));
    const body=document.createElement('div');body.className='destination-body';
    body.append(safeText('h3',d.name),safeText('p',d.desc));
    const footer=document.createElement('div');footer.className='card-footer';
    footer.append(safeText('span',d.note));
    const action=safeText('button','Lihat lokasi ↗','card-action');action.type='button';action.addEventListener('click',()=>window.open(mapsUrl(d.query),'_blank','noopener,noreferrer'));
    footer.append(action);body.append(footer);card.append(art,body);grid.append(card);
  });
}
function renderEvents(){
  const target=$('#eventGrid');target.replaceChildren();
  events.forEach(e=>{
    const card=document.createElement('article');card.className='event-card';
    const date=document.createElement('div');date.className='event-date';date.append(safeText('strong',e.day),safeText('span',e.month));
    const info=document.createElement('div');info.append(safeText('h3',e.title),safeText('p',e.desc),safeText('p',e.place+' · '+e.kind,'event-kind'));
    card.append(date,info);target.append(card);
  });
}
function renderTastes(){
  const target=$('#tasteGrid');target.replaceChildren();
  tastes.forEach(t=>{
    const card=document.createElement('article');card.className='taste-card';
    card.append(safeText('span',t.emoji,'taste-icon'));
    const info=document.createElement('div');info.append(safeText('h3',t.name),safeText('p',t.kind));
    const link=safeText('a','Temukan di peta ↗');link.href=mapsUrl(t.query);link.target='_blank';link.rel='noopener noreferrer';info.append(link);
    card.append(info);target.append(card);
  });
}
function selectRoute(key){
  const route=routes[key];if(!route)return;
  $$('.route-option').forEach(b=>b.classList.toggle('selected',b.dataset.route===key));
  $('#routeTitle').textContent=route.title;$('#routeDescription').textContent=route.desc;
  const stops=$('#routeStops');stops.replaceChildren();
  route.ids.forEach(id=>{const item=destinations.find(d=>d.id===id);if(item)stops.append(safeText('li',item.name));});
  $('#routeMapLink').href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(route.destination);
}
function getUnlocked(){try{const raw=localStorage.getItem('langsago-badges');const parsed=raw?JSON.parse(raw):[];return Array.isArray(parsed)?parsed.filter(id=>destinations.some(d=>d.id===id)):[];}catch{return [];}}
function saveUnlocked(ids){try{localStorage.setItem('langsago-badges',JSON.stringify(ids));}catch{notify('Penyimpanan perangkat tidak tersedia.');}}
function renderBadges(){
  const target=$('#badgeCollection');target.replaceChildren();
  const unlocked=getUnlocked();
  destinations.forEach(d=>{
    const item=document.createElement('div');item.className='badge-item'+(unlocked.includes(d.id)?' unlocked':'');
    item.append(safeText('span',d.emoji,'badge-emoji'),safeText('strong',d.name),safeText('small',unlocked.includes(d.id)?'Sudah dijelajahi':'Belum dikunjungi'));
    const button=safeText('button',unlocked.includes(d.id)?'Batalkan check-in':'Check-in demo','card-action');button.type='button';button.addEventListener('click',()=>{
      const next=getUnlocked();const exists=next.includes(d.id);const updated=exists?next.filter(x=>x!==d.id):[...next,d.id];saveUnlocked(updated);renderBadges();notify(exists?'Check-in demo dibatalkan.':'Badge destinasi berhasil ditandai!');
    });
    item.append(button);target.append(item);
  });
  $('#badgeCount').textContent=unlocked.length+' / '+destinations.length;
  $('#badgeProgress').style.width=(unlocked.length/destinations.length*100)+'%';
}
function init(){
  renderDestinations();renderEvents();renderTastes();selectRoute('alam');renderBadges();
  $('#year').textContent=String(new Date().getFullYear());
  $('#categoryFilters').addEventListener('click',e=>{
    const button=e.target.closest('button[data-category]');if(!button)return;
    $$('.chip').forEach(chip=>chip.classList.toggle('active',chip===button));
    renderDestinations(button.dataset.category,$('#globalSearch').value);
  });
  $('#globalSearch').addEventListener('input',()=>{
    const active=$('.chip.active');renderDestinations(active?active.dataset.category:'Semua',$('#globalSearch').value);
  });
  $$('.route-option').forEach(button=>button.addEventListener('click',()=>selectRoute(button.dataset.route)));
  const menu=$('#menuToggle'),nav=$('#mainNav');
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup navigasi':'Buka navigasi');
  });
  nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka navigasi');}});
}
document.addEventListener('DOMContentLoaded',init);
