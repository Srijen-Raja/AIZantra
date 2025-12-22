// IntersectionObserver helper to add 'in-view' class to elements with 'animate-on-scroll'
export default function initScrollAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    }
  );

  // Observe elements explicitly marked
  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

  // Auto-observe common homepage selectors and add default animation classes
  const autoSelectors = [
    '.hero-text h1',
    '.hero-text > p',
    '.hero-actions',
    '.hero-card',
    '.hero-visual-desktop .hero-card',
    '.card',
    '.section',
    '.nav',
    '.footer',
    '.hero-stats li'
  ];

  const autoEls = document.querySelectorAll(autoSelectors.join(','));
  autoEls.forEach((el) => {
    if (el.classList.contains('in-view')) {
      observer.observe(el);
      return;
    }

    if (el.matches('h1, h2, h3, .hero-card, .card, .section')) el.classList.add('animate-fade-up');
    else if (el.matches('.hero-text > p, p')) el.classList.add('animate-fade');
    else if (el.matches('.hero-actions')) el.classList.add('animate-slide-left');
    else if (el.matches('.hero-stats li')) el.classList.add('animate-slide-right');
    else if (el.matches('.nav')) el.classList.add('animate-fade-down');
    else el.classList.add('animate-fade');

    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}
