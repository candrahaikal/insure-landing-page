const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNavbar = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', (e) => {
  mobileNavbar.classList.toggle('nav-links-mobile');

  //ganti picture
  if(mobileNavbar.classList.contains('nav-links-mobile')){
    e.target.src = 'images/icon-close.svg';
  } else{
    e.target.src = 'images/icon-hamburger.svg';
  }
  
})