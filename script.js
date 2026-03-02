const sections = document.querySelectorAll('.reveal');
const translatable = document.querySelectorAll('[data-i18n]');
const btnTr = document.getElementById('btn-tr');
const btnEn = document.getElementById('btn-en');
const accordions = document.querySelectorAll('.accordion');
const themeToggle = document.getElementById('theme-toggle');

const translations = {
  en: {
    tag: 'Portfolio CV',
    role: 'CRM & Revenue Analytics-focused Industrial Engineer',
    education_title: 'Education',
    education_school: 'Istanbul Technical University',
    education_detail: '2020 - 2025 | GPA: 3.08',
    education_thesis: 'Thesis: Super Lig standings prediction model (R2: 0.557)',
    capabilities_title: 'Capabilities',
    cap_1: 'Retention & Churn Analysis',
    cap_2: 'Cohort Design & Segmentation',
    cap_3: 'Store-level KPI Architecture',
    cap_4: 'Revenue Forecasting & Budget Guidance',
    core_stack_title: 'Core Stack',
    links_title: 'Links',
    headline_title: 'Commercial data into growth decisions.',
    headline_desc:
      'Experience across Nike, Nesine, and KPMG with focus on retention modeling, segmentation, KPI systems, and revenue optimization.',
    impact_1: 'Atyarisi branch market share growth in initial launch phase.',
    impact_2: 'Engagement uplift in segmentation-led CRM cohorts.',
    impact_3: 'Retail doors tracked with inventory and financial KPI monitoring.',
    exp1_title: 'Nike | Logistics Analyst',
    exp1_date: '2025 - present',
    exp1_desc_1: 'Track inventory and financial KPIs across 61 retail doors.',
    exp1_desc_2: 'Built allowance tracking dashboard for return-limit and financial exposure monitoring.',
    exp1_desc_3: 'Execute SAP stock corrections to protect data integrity and operational transparency.',
    exp2_title: 'Nesine | CRM Intern',
    exp2_date: '2024 - 2025',
    exp2_desc_1: 'Delivered churn, retention, and cohort analytics for lifecycle decision making.',
    exp2_desc_2: 'Designed segmentation campaigns with around 20% engagement uplift.',
    exp2_desc_3: 'Built revenue forecast models and supported Atyarisi launch with SQL + Tableau.',
    exp3_title: 'Nike | Retail Sales Intern',
    exp3_date: '2023 - 2024',
    exp3_desc_1: 'Analyzed conversion, margin, sell-through, and stock coverage across 54 stores.',
    exp3_desc_2: 'Built Excel + Tableau reporting infrastructure for faster commercial decisions.',
    exp3_desc_3: 'Flagged underperforming categories and supported product-level optimization.',
    exp4_title: 'KPMG | Data & Digital Advisory Trainee',
    exp4_date: '2022 - 2023',
    exp4_desc_1: 'Worked as Scrum Master on telecom data transformation delivery.',
    exp4_desc_2: 'Contributed to generative-AI based customer response prediction initiative.',
    exp4_desc_3: 'Built Python parser to detect anomalies in vendor contracts.',
    project_title: 'Featured Project | Birader',
    project_desc_1: 'Full-stack social check-in platform with public profiles, feed, follows, and comments.',
    project_desc_2: 'Includes notifications, activity heatmaps, TR/EN localization, and PWA support.',
    project_desc_3: 'Built with Next.js, TypeScript, Tailwind, Supabase, and SQL RLS.',
    project_link: 'Open Product',
    contact_title: 'Contact',
    contact_city: 'Istanbul, Turkey',
    theme_toggle_dark: 'Dark',
    theme_toggle_light: 'Light',
    download_resume: 'Download Resume'
  },
  tr: {
    tag: 'Portfolyo CV',
    role: 'CRM ve Gelir Analitigi odakli Endustri Muhendisi',
    education_title: 'Egitim',
    education_school: 'Istanbul Teknik Universitesi',
    education_detail: '2020 - 2025 | GNO: 3.08',
    education_thesis: 'Tez: Super Lig siralama tahmin modeli (R2: 0.557)',
    capabilities_title: 'Yetenekler',
    cap_1: 'Retention ve Churn Analizi',
    cap_2: 'Cohort Tasarimi ve Segmentasyon',
    cap_3: 'Magaza Bazli KPI Mimarisi',
    cap_4: 'Gelir Tahmini ve Butce Yonlendirme',
    core_stack_title: 'Ana Teknoloji',
    links_title: 'Linkler',
    headline_title: 'Ticari veriyi buyume kararina donusturuyorum.',
    headline_desc:
      'Nike, Nesine ve KPMG deneyimiyle retention modelleme, segmentasyon, KPI sistemleri ve gelir optimizasyonuna odaklandim.',
    impact_1: 'Atyarisi yeni acilis fazinda pazar payini %150 artirdi.',
    impact_2: 'Segmentasyon odakli CRM kohortlarinda yaklasik %20 etkilesim artisi.',
    impact_3: 'Envanter ve finans KPI takibi yapilan perakende kapi sayisi: 61.',
    exp1_title: 'Nike | Lojistik Analisti',
    exp1_date: '2025 - devam ediyor',
    exp1_desc_1: '61 perakende kapi icin envanter ve finans KPI takibi yurutuyorum.',
    exp1_desc_2: 'Iade limiti ve finansal risk izleme icin allowance dashboard gelistirdim.',
    exp1_desc_3: 'Veri butunlugu icin SAP stok duzeltmeleri ve siparis duzeltmeleri yapiyorum.',
    exp2_title: 'Nesine | CRM Stajyeri',
    exp2_date: '2024 - 2025',
    exp2_desc_1: 'Yasam dongusu kararlarini desteklemek icin churn, retention ve cohort analizi yaptim.',
    exp2_desc_2: 'Segmentasyon kampanyalarinda yaklasik %20 etkilesim artisi elde ettim.',
    exp2_desc_3: 'Gelir tahmin modelleri kurup Atyarisi lansmanina SQL + Tableau ile destek verdim.',
    exp3_title: 'Nike | Retail Sales Stajyeri',
    exp3_date: '2023 - 2024',
    exp3_desc_1: '54 magazada conversion, margin, sell-through ve stock coverage KPI analizi yaptim.',
    exp3_desc_2: 'Excel + Tableau raporlama altyapisi kurarak karar hizini artirdim.',
    exp3_desc_3: 'Dusuk performansli kategorileri tespit edip urun optimizasyonunu destekledim.',
    exp4_title: 'KPMG | Data & Digital Advisory Stajyeri',
    exp4_date: '2022 - 2023',
    exp4_desc_1: 'Telekom donusum projesinde Scrum Master gorevinde yer aldim.',
    exp4_desc_2: 'Generative AI tabanli musteri tepki tahmini girisimine katki sundum.',
    exp4_desc_3: 'Tedarikci sozlesmelerinde anomali tespiti icin Python parser gelistirdim.',
    project_title: 'One Cikan Proje | Birader',
    project_desc_1: 'Public profil, akis, takip, yorum ve sosyal etkilesim ozellikleri olan full-stack urun.',
    project_desc_2: 'Bildirimler, aktivite heatmap, TR/EN dil destegi ve PWA ozellikleri bulunur.',
    project_desc_3: 'Next.js, TypeScript, Tailwind, Supabase ve SQL RLS ile gelistirildi.',
    project_link: 'Urunu Ac',
    contact_title: 'Iletisim',
    contact_city: 'Istanbul, Turkiye',
    theme_toggle_dark: 'Koyu',
    theme_toggle_light: 'Acik',
    download_resume: 'CV Indir'
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

function getLang() {
  const preferredLang = localStorage.getItem('site-lang');
  if (preferredLang === 'tr' || preferredLang === 'en') {
    return preferredLang;
  }
  return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

function getInitialTheme() {
  const stored = localStorage.getItem('site-theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const lang = getLang();
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site-theme', theme);
  const dict = translations[lang] || translations.en;
  const labelKey = theme === 'dark' ? 'theme_toggle_light' : 'theme_toggle_dark';
  themeToggle.textContent = dict[labelKey] || translations.en[labelKey];
}

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

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const labelKey = currentTheme === 'dark' ? 'theme_toggle_light' : 'theme_toggle_dark';
  themeToggle.textContent = dict[labelKey] || translations.en[labelKey];
}

btnTr.addEventListener('click', () => applyLanguage('tr'));
btnEn.addEventListener('click', () => applyLanguage('en'));

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

applyTheme(getInitialTheme());
applyLanguage(getLang());
