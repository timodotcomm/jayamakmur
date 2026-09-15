const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'));});}

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){
 quoteForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const d=new FormData(quoteForm);
  const msg=`Halo Pak Rudy, saya ingin konsultasi cold storage.%0A%0ANama: ${encodeURIComponent(d.get('nama')||'-')}%0APerusahaan: ${encodeURIComponent(d.get('perusahaan')||'-')}%0AKebutuhan: ${encodeURIComponent(d.get('kebutuhan')||'-')}%0ADetail: ${encodeURIComponent(d.get('pesan')||'-')}`;
  window.open(`https://wa.me/6289630714597?text=${msg}`,'_blank','noopener');
 });
}
