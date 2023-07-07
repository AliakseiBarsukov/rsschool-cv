// scroll  

const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY
    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${scrollController.scrollPosition}px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: ${window.innerWidth - document.body.offsetWidth}px;
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({top: scrollController.scrollPosition});
    document.documentElement.style.scrollBehavior = '';
  },

}


// mobile menu

const menuBtn = document.querySelector('.menu');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navItem = document.querySelectorAll('.nav__item');

const menuOpen = () => {
  menuBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    menu.classList.toggle('nav-open');
    overlay.classList.toggle('overlay-active');
    document.body.classList.toggle('nav-open');
  })
}

navItem.forEach((item) => {
  item.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    menu.classList.toggle('nav-open');
    overlay.classList.remove('overlay-active');
    document.body.classList.toggle('nav-open');
  })
})

const menuClose = () => {
  overlay.addEventListener('click', (event) => {
    const target = event.target;

    if (target === overlay || target === menuBtn) {
      menuIcon.classList.remove('menu-icon-active');
      menu.classList.remove('nav-open');
      overlay.classList.remove('overlay-active');
      scrollController.enabledScroll();
      document.body.classList.remove('nav-open');
    }
  })
}

menuOpen();
menuClose();