document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.nav'), btn=document.querySelector('.menu-btn');
 if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
 const form=document.querySelector('#contact-form');
 if(form) form.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(form);
   const name=(data.get('name')||'').trim(), email=(data.get('email')||'').trim(), message=(data.get('message')||'').trim();
   if(!name||!email||!message){alert('Please complete all fields.');return;}
   const subject=encodeURIComponent('Website enquiry from '+name);
   const body=encodeURIComponent('Name: '+name+'\\nEmail: '+email+'\\n\\n'+message);
   window.location.href='mailto:Growthhardik@gmail.com?subject='+subject+'&body='+body;
 });
 const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
});
