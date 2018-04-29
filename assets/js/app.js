const hamburger = document.querySelector('.nav-bars');
const nav = document.querySelector('nav');


hamburger.addEventListener('click', ()=>{
  nav.classList.toggle('show');
})
