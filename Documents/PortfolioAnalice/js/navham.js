const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-hamburguer-content');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('open');
});


