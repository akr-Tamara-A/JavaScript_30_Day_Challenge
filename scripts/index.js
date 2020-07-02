const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.nav__list');
const navButtonClose = document.querySelector('.nav__button');

function handleNav() {
  navButtonClose.classList.toggle('button_active');
  navList.classList.toggle('nav_list_active');
}

navButtonClose.addEventListener('click', handleNav);










