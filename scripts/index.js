const nav = document.querySelector('.page__nav');
const navList = document.querySelector('.nav__list');
const navButtonClose = document.querySelector('.button_type_nav');

function handleNav() {
  navButtonClose.classList.toggle('button_active');
  navList.classList.toggle('nav_list_active');
}

navButtonClose.addEventListener('click', handleNav);










