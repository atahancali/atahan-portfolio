const sections = Array.from(document.querySelectorAll('.reveal'));
const accordions = document.querySelectorAll('.accordion');
const themeToggle = document.getElementById('theme-toggle');

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function applyRevealProfile(selectors, options) {
  const nodes = document.querySelectorAll(selectors);
  nodes.forEach((el, index) => {
    el.dataset.revealProfile = 'custom';
    el.style.transitionDuration = `${options.duration}ms`;
    el.style.transitionDelay = `${Math.min(options.offset + index * options.step, options.maxDelay)}ms`;
  });
}

applyRevealProfile('.site-head, .headline', {
  duration: 420,
  step: 50,
  offset: 0,
  maxDelay: 200,
});

applyRevealProfile('.left-rail, .impact-grid', {
  duration: 540,
  step: 70,
  offset: 80,
  maxDelay: 320,
});

applyRevealProfile('.timeline, .contact', {
  duration: 650,
  step: 95,
  offset: 150,
  maxDelay: 460,
});

sections.forEach((el, index) => {
  if (el.dataset.revealProfile) {
    return;
  }

  el.style.transitionDuration = '560ms';
  el.style.transitionDelay = `${Math.min(index * 70, 300)}ms`;
});

function revealAllImmediately() {
  sections.forEach((el) => {
    el.classList.add('in');
  });
}

function initRevealObserver() {
  if (reducedMotionQuery.matches) {
    revealAllImmediately();
    return;
  }

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

  sections.forEach((el) => io.observe(el));
}

initRevealObserver();

if (typeof reducedMotionQuery.addEventListener === 'function') {
  reducedMotionQuery.addEventListener('change', (event) => {
    if (event.matches) {
      revealAllImmediately();
    }
  });
} else if (typeof reducedMotionQuery.addListener === 'function') {
  reducedMotionQuery.addListener((event) => {
    if (event.matches) {
      revealAllImmediately();
    }
  });
}

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
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site-theme', theme);
  updateThemeButton(theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

applyTheme(getInitialTheme());
