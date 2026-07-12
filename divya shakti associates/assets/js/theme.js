(function () {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = () => document.body.classList.remove('menu-open');
  if (menuToggle) menuToggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => { if (header) header.classList.toggle('scrolled', window.scrollY > 40); });
  const toast = document.getElementById('enquiry-toast');
  if (toast) window.setTimeout(() => toast.remove(), 6000);
})();
