const nav = document.querySelector('.header__nav');
const navButtonClose = document.querySelector('.button_type_menu');

function handleNav() {
  nav.classList.toggle('header__nav_active');
  
}

navButtonClose.addEventListener('click', handleNav);










