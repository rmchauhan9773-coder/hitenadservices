document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.site-nav, .nav');
  const button=nav ? nav.querySelector('.menu-btn') : document.querySelector('.menu-btn');
  if(nav && button){
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      button.setAttribute('aria-expanded',String(open));
    });
  }
  document.querySelectorAll('[data-year]').forEach(el=>{
    el.textContent=String(new Date().getFullYear());
  });
});
