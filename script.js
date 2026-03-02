const sections = document.querySelectorAll('.reveal');
const accordions = document.querySelectorAll('.accordion');
const themeToggle = document.getElementById('theme-toggle');

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

sections.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
  io.observe(el);
});

function setSingleOpenAccordion(accordion) {
  const detailsList = accordion.querySelectorAll('details');
  detailsList.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) {
        return;
      }
      detailsList.forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    });
  });
}

accordions.forEach((accordion) => setSingleOpenAccordion(accordion));

function getInitialTheme() {
  const stored = localStorage.getItem('site-theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeButton(theme) {
  themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site-theme', theme);
  updateThemeButton(theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

applyTheme(getInitialTheme());
