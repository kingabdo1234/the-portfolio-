/**
 * Abdullah Mohammed Taha - Personal Portfolio JavaScript
 * ES6+ Vanilla JS Implementation
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) - ARABIC & ENGLISH TRANSLATIONS
     ========================================================================== */
  const translations = {
    en: {
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-skills': 'Skills',
      'nav-education': 'Education',
      'nav-learning': 'Learning',
      'nav-projects': 'Projects',
      'nav-contact': 'Contact',
      'hero-status': 'Open to Learning Opportunities',
      'hero-greeting': "Hello, I'm",
      'hero-role': 'Computer Science Student & Aspiring Full Stack Developer',
      'hero-desc': "I'm a second-year Computer Science student at Benha University, currently developing my front-end skills and working toward becoming a Full Stack Developer.",
      'btn-skills': 'View My Skills',
      'btn-contact': 'Contact Me',
      'about-title': 'About Me',
      'about-text-1': 'I am a second-year Computer Science student at the Faculty of Computers and Artificial Intelligence, Benha University, maintaining a GPA of 3.58.',
      'about-text-2': 'Currently expanding my technical knowledge as a DEPI trainee, I am actively building my foundation in web development. My primary goal is to become a Full Stack Developer by mastering modern technologies through dedicated practice and real-world projects.',
      'about-strengths-title': 'Core Strengths',
      'strength-1': 'Dedicated to continuous learning and practice',
      'strength-2': 'Eager to learn and adapt to new technologies',
      'strength-3': 'Strong interest in modern Web Development',
      'strength-4': 'Determined path toward Full Stack Development',
      'skills-title': 'Skills & Knowledge',
      'level-excellent': 'Excellent',
      'level-intermediate': 'Intermediate',
      'level-beginner': 'Beginner',
      'level-learned': 'Learned',
      'level-basics': 'Basics',
      'edu-title': 'Education',
      'edu-univ': 'Benha University',
      'edu-faculty': 'Faculty of Computers and Artificial Intelligence',
      'edu-dept': 'Computer Science Department — Second Year Student',
      'edu-gpa': 'GPA',
      'cert-title': 'Training & Certificates',
      'cert-depi-title': 'DEPI Training Program',
      'cert-depi-desc': 'Digital Egypt Pioneers Initiative — Active Trainee building technical software skills.',
      'cert-ai-title': 'AI Basics Course',
      'cert-ai-desc': 'Issued by ORC — Foundational course covering artificial intelligence basics and concepts.',
      'learning-title': 'Currently Learning',
      'learning-subtitle': 'My structured learning path towards full stack development',
      'path-step-1': 'Semantic & Responsive Markup',
      'path-step-2': 'Flexbox, Grid & Responsive Styling',
      'path-step-3': 'ES6+ Basics & DOM Manipulation',
      'path-step-4-title': 'Front-End Development',
      'path-step-4': 'Interactive UI & Frameworks',
      'path-step-5-title': 'Back-End Development',
      'path-step-5': 'Server Logic & Databases',
      'path-step-6-title': 'Full Stack Developer',
      'path-step-6': 'End-to-End Web Applications',
      'projects-title': 'Projects',
      'projects-empty-head': 'Projects Coming Soon',
      'projects-empty-body': "I'm currently building practical projects to strengthen my development skills. New projects will be added here soon.",
      'goal-title': 'Career Goal',
      'goal-desc': '"My goal is to become a Full Stack Developer, gain practical experience, work on real-world projects, and continuously improve my software development skills."',
      'btn-connect': "Let's Connect",
      'contact-title': 'Contact Me',
      'contact-info-head': 'Get In Touch',
      'contact-info-desc': 'Feel free to reach out for learning opportunities, inquiries, or networking.',
      'label-email': 'Email',
      'label-phone': 'Phone / WhatsApp',
      'form-name': 'Name',
      'form-email': 'Email',
      'form-subject': 'Subject',
      'form-message': 'Message',
      'form-send': 'Send Message',
      'footer-rights': 'All rights reserved.'
    },
    ar: {
      'nav-home': 'الرئيسية',
      'nav-about': 'من أنا',
      'nav-skills': 'المهارات',
      'nav-education': 'التعليم',
      'nav-learning': 'مسار التعلم',
      'nav-projects': 'المشاريع',
      'nav-contact': 'تواصل معي',
      'hero-status': 'متاح لفرص التعلم والتطوير',
      'hero-greeting': 'مرحباً، أنا',
      'hero-role': 'طالب علوم حاسب ومطور ويب متكامل طموح',
      'hero-desc': 'طالب في السنة الثانية بكلية الحاسبات والذكاء الاصطناعي بجامعة بنها، أعمل حالياً على تطوير مهاراتي في تطوير الواجهات الأمامية والنمو نحو التكون كمطور ويب متكامل (Full Stack).',
      'btn-skills': 'استعرض مهاراتي',
      'btn-contact': 'تواصل معي',
      'about-title': 'نبذة عني',
      'about-text-1': 'أنا طالب في الفرقة الثانية بكلية الحاسبات والذكاء الاصطناعي - جامعة بنها، بمتوسط تقييم تراكمي (GPA 3.58).',
      'about-text-2': 'أتدرب حالياً ضمن مبادرة بناة مصر الرقمية (DEPI) لبناء وتوسيع خبراتي التقنية في مجال تطوير الويب. أهدف بشكل أساسي إلى الوصول لدرجة احترافية كمطور Full Stack من خلال الممارسة العملية المستمرة وبناء المشاريع.',
      'about-strengths-title': 'نقاط القوة',
      'strength-1': 'ملتزم ومكرس وقتي للتعلم والتطوير المستمر',
      'strength-2': 'رغبة وقدرة عالية على تعلم التقنيات الجديدة',
      'strength-3': 'شغف واهتمام قوي بمجال تطوير الويب',
      'strength-4': 'سعي جاد ومستمر نحو التخصص كـ Full Stack Developer',
      'skills-title': 'المهارات والمعارف',
      'level-excellent': 'ممتاز',
      'level-intermediate': 'متوسط',
      'level-beginner': 'مبتدئ',
      'level-learned': 'تم دراسته',
      'level-basics': 'أساسيات',
      'edu-title': 'التعليم',
      'edu-univ': 'جامعة بنها',
      'edu-faculty': 'كلية الحاسبات والذكاء الاصطناعي',
      'edu-dept': 'قسم علوم الحاسب — طالب بالفرقة الثانية',
      'edu-gpa': 'المعدل التراكمي',
      'cert-title': 'التدريب والشهادات',
      'cert-depi-title': 'تدريب مبادرة بناة مصر الرقمية (DEPI)',
      'cert-depi-desc': 'متدرب حالي لتطوير المهارات البرمجية والتقنية.',
      'cert-ai-title': 'دورة أساسيات الذكاء الاصطناعي',
      'cert-ai-desc': 'مقدمة من ORC — دورة تغطي المفاهيم والأساسيات الجوهرية للذكاء الاصطناعي.',
      'learning-title': 'أتعلّم حالياً',
      'learning-subtitle': 'مسار التعلم المنهجي نحو تطوير الويب المتكامل',
      'path-step-1': 'الهيكلة وتنسيق الصفحات التفاعلية',
      'path-step-2': 'التنسيقات المتقدمة والتصميم التجاوري',
      'path-step-3': 'أساسيات البرمجة والتعامل مع عناصر الصفحة',
      'path-step-4-title': 'تطوير الواجهات الأمامية',
      'path-step-4': 'بناء الواجهات التفاعلية وأطر العمل',
      'path-step-5-title': 'تطوير الخلفيات والقواعد',
      'path-step-5': 'منطق الخوادم وإدارة قواعد البيانات',
      'path-step-6-title': 'مطور ويب متكامل',
      'path-step-6': 'بناء تطبيقات ويب متكاملة من البداية للنهاية',
      'projects-title': 'المشاريع',
      'projects-empty-head': 'المشاريع قيد التطوير حالياً',
      'projects-empty-body': 'أعمل حالياً على بناء مشاريع عملية لتعزيز مهاراتي البرمجية. سيتم إضافة المشاريع الجديدة هنا فور اكتمالها.',
      'goal-title': 'الهدف المهني',
      'goal-desc': '"هدفي هو أن أصل لمستوى مطور Full Stack محترف، واكتساب الخبرة العملية من خلال العمل على مشاريع واقعية، والتطوير المستمر لمهاراتي البرمجية."',
      'btn-connect': 'تواصل معي',
      'contact-title': 'تواصل معي',
      'contact-info-head': 'معلومات التواصل',
      'contact-info-desc': 'يسعدني تواصلك معي لبحث فرص التعلم، الاستفسارات، أو بناء العلاقات المهنية.',
      'label-email': 'البريد الإلكتروني',
      'label-phone': 'الهاتف / واتساب',
      'form-name': 'الاسم',
      'form-email': 'البريد الإلكتروني',
      'form-subject': 'الموضوع',
      'form-message': 'الرسالة',
      'form-send': 'إرسال الرسالة',
      'footer-rights': 'جميع الحقوق محفوظة.'
    }
  };

  /* ==========================================================================
     2. THEME & LANGUAGE MANAGEMENT (LOCALSTORAGE)
     ========================================================================== */
  const langToggleBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const themeToggleBtn = document.getElementById('themeToggle');

  // Load saved preferences or set defaults
  let currentLang = localStorage.getItem('app_lang') || 'en';
  let currentTheme = localStorage.getItem('app_theme') || 'dark';

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    localStorage.setItem('app_lang', lang);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app_theme', theme);
  }

  // Initial application
  applyLanguage(currentLang);
  applyTheme(currentTheme);

  // Language switch handler
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(currentLang);
  });

  // Theme switch handler
  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });

  /* ==========================================================================
     3. MOBILE NAVIGATION MENU
     ========================================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* ==========================================================================
     4. SCROLL EFFECTS & ACTIVE NAVIGATION LINK
     ========================================================================== */
  const sections = document.querySelectorAll('section');
  const backToTopBtn = document.getElementById('backToTop');
  const scrollProgressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    scrollProgressBar.style.width = `${progress}%`;

    // Back to top button visibility
    if (scrollPosition > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active navigation highlight
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==========================================================================
     5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});