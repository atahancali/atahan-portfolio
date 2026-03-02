const sections = document.querySelectorAll('.reveal');
const translatable = document.querySelectorAll('[data-i18n]');
const btnTr = document.getElementById('btn-tr');
const btnEn = document.getElementById('btn-en');
const accordions = document.querySelectorAll('.accordion');

const translations = {
  en: {
    tag: 'Portfolio CV',
    role: 'CRM & Revenue Analytics-focused Industrial Engineer',
    education_title: 'Education',
    education_school: 'Istanbul Technical University',
    education_detail: '2020 - 2025 | GPA: 3.08',
    core_stack_title: 'Core Stack',
    links_title: 'Links',
    headline_title: 'Commercial data into growth decisions.',
    headline_desc:
      'Experience across Nike, Nesine, and KPMG with focus on retention modeling, segmentation, KPI systems, and revenue optimization.',
    exp1_title: 'Nike | Logistics Analyst',
    exp1_desc: 'Track inventory and financial KPIs across 61 retail doors and run SAP stock corrections.',
    exp1_date: '2025 - present',
    exp2_title: 'Nesine | CRM Intern',
    exp2_date: '2024 - 2025',
    exp2_desc:
      'Ran churn and cohort analyses, segmentation campaigns with ~20% uplift, and forecasting models for budget allocation.',
    exp3_title: 'Nike | Retail Sales Intern',
    exp3_date: '2023 - 2024',
    exp3_desc: 'Built KPI reporting across 54 stores and flagged category-level risks for merchandising action.',
    exp4_title: 'KPMG | Data & Digital Advisory Trainee',
    exp4_date: '2022 - 2023',
    exp4_desc: 'Scrum-coordinated telecom data transformation and developed Python contract anomaly parser.',
    project_title: 'Featured Project | Birader',
    project_desc:
      'Full-stack social check-in platform with public profiles, feed, notifications, activity heatmaps, TR/EN localization, and SQL RLS.',
    project_link: 'Open Product',
    contact_title: 'Contact',
    contact_city: 'Istanbul, Turkey'
  },
  tr: {
    tag: 'Portfolyo CV',
    role: 'CRM ve Gelir Analitigi odakli Endustri Muhendisi',
    education_title: 'Egitim',
    education_school: 'Istanbul Teknik Universitesi',
    education_detail: '2020 - 2025 | GNO: 3.08',
    core_stack_title: 'Ana Teknoloji',
    links_title: 'Linkler',
    headline_title: 'Ticari veriyi buyume kararina donusturuyorum.',
    headline_desc:
      'Nike, Nesine ve KPMG deneyimiyle retention modelleme, segmentasyon, KPI sistemleri ve gelir optimizasyonuna odaklandim.',
    exp1_title: 'Nike | Lojistik Analisti',
    exp1_desc: '61 magaza icin envanter ve finans KPI takibi yaptim, SAP stok duzeltmeleri yonettim.',
    exp1_date: '2025 - devam ediyor',
    exp2_title: 'Nesine | CRM Stajyeri',
    exp2_date: '2024 - 2025',
    exp2_desc: 'Churn ve cohort analizleri yaptim; segmentasyon kampanyalarinda yaklasik %20 etkilesim artisi sagladim.',
    exp3_title: 'Nike | Retail Sales Stajyeri',
    exp3_date: '2023 - 2024',
    exp3_desc: '54 magazada KPI raporlama altyapisi kurup kategori bazli riskleri merch ekibine tasidim.',
    exp4_title: 'KPMG | Data & Digital Advisory Stajyeri',
    exp4_date: '2022 - 2023',
    exp4_desc: 'Telekom donusum projesinde scrum koordinasyonu yaptim, Python ile sozlesme anomali parseri gelistirdim.',
    project_title: 'One Cikan Proje | Birader',
    project_desc:
      'Public profil, feed, bildirim, aktivite heatmap, TR/EN dil destegi ve SQL RLS iceren full-stack social check-in platformu.',
    project_link: 'Urunu Ac',
    contact_title: 'Iletisim',
    contact_city: 'Istanbul, Turkiye'
  }
};

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

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) {
      return;
    }
    const value = dict[key] || translations.en[key];
    if (value) {
      node.textContent = value;
    }
  });

  document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
  btnTr.classList.toggle('active', lang === 'tr');
  btnEn.classList.toggle('active', lang === 'en');
  btnTr.setAttribute('aria-pressed', String(lang === 'tr'));
  btnEn.setAttribute('aria-pressed', String(lang === 'en'));
  localStorage.setItem('site-lang', lang);
}

btnTr.addEventListener('click', () => applyLanguage('tr'));
btnEn.addEventListener('click', () => applyLanguage('en'));

const preferredLang = localStorage.getItem('site-lang');
const browserLang = navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
const initialLang = preferredLang === 'tr' || preferredLang === 'en' ? preferredLang : browserLang;

applyLanguage(initialLang);
