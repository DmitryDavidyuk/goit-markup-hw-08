(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn-menu-open'),
    closeMenuBtn: document.querySelector('.btn-menu-close'),
    menu: document.querySelector('.mob-menu'),
    lockScrol: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.lockScrol.classList.toggle('lock');
  }
})();