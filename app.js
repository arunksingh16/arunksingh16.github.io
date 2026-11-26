// Marks the page as JS-enabled so reveal animations never hide content without JS.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // Reveal sections as they scroll into view
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // Header border once the page is scrolled
  const header = document.getElementById('main-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('navigation-list');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
});
