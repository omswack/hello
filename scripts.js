// ===== Dark Mode Toggle =====
const toggle = document.querySelector('.theme-toggle');
const icon = document.querySelector('.theme-icon');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  icon.textContent = next === 'dark' ? '☀' : '☾';
});

// ===== Active Nav Highlighting =====
const navLinks = document.querySelectorAll('nav ul a');
const sections = document.querySelectorAll('main section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => navObserver.observe(section));

// ===== Scroll Fade-In Animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
