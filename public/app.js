const header=document.querySelector('.site-header');
const menu=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
const progress=document.getElementById('scrollProgress');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();

function onScroll(){
  const y=window.scrollY;
  header.classList.toggle('scrolled',y>20);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max?Math.min(100,y/max*100):0)+'%';
}
onScroll();
addEventListener('scroll',onScroll,{passive:true});

menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  })
},{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const body='Name: '+(d.get('name')||'')+'\nEmail: '+(d.get('email')||'')+'\n\n'+(d.get('message')||'');
  location.href='mailto:contact@atheriouslabs.com?subject='+encodeURIComponent(d.get('subject')||'Atherious Labs Inquiry')+'&body='+encodeURIComponent(body);
});
