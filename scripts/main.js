const menuButton = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const yearElement = document.getElementById('year');

if (menu && menuButton) {
  const mediaQuery = window.matchMedia('(max-width: 900px)');

  const syncMenuWithViewport = () => {
    if (mediaQuery.matches) {
      menu.setAttribute('aria-hidden', 'true');
      menuButton.setAttribute('aria-expanded', 'false');
    } else {
      menu.removeAttribute('aria-hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  };

  const toggleMenu = () => {
    if (!mediaQuery.matches) return;
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-hidden', String(expanded));
  };

  syncMenuWithViewport();
  mediaQuery.addEventListener('change', syncMenuWithViewport);
  menuButton.addEventListener('click', toggleMenu);

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mediaQuery.matches && menuButton.getAttribute('aria-expanded') === 'true') {
        toggleMenu();
      }
    });
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
