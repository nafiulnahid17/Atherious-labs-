const header=document.querySelector('.site-header');
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
const progress=document.getElementById('scrollProgress');
const year=document.getElementById('year');
const form=document.getElementById('contactForm');
const heroStage=document.getElementById('heroStage');

year.textContent=new Date().getFullYear();

function syncScroll(){
  const y=window.scrollY;
  header.classList.toggle('scrolled',y>18);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max?Math.min(100,y/max*100):0)+'%';
}
syncScroll();
addEventListener('scroll',syncScroll,{passive:true});

menuToggle.addEventListener('click',()=>{
  const open=mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.tilt').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
  document.querySelector('.hero')?.addEventListener('pointermove',e=>{
    if(!heroStage)return;
    const x=(e.clientX/window.innerWidth-.5)*8;
    const y=(e.clientY/window.innerHeight-.5)*-6;
    heroStage.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
  });
  document.querySelector('.hero')?.addEventListener('pointerleave',()=>{
    if(heroStage)heroStage.style.transform='';
  });
}

form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const body=`Name: ${d.get('name')||''}\nEmail: ${d.get('email')||''}\n\n${d.get('message')||''}`;
  location.href='mailto:contact@atheriouslabs.com?subject='+encodeURIComponent(d.get('subject')||'Atherious Labs Inquiry')+'&body='+encodeURIComponent(body);
});