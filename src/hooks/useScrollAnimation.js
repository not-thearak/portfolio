import { useEffect } from 'react';

const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -80px 0px',
  } = options;

  useEffect(() => {
    const selector = '[data-animate], .stagger';
    const elements = document.querySelectorAll(selector);

    if (!window.IntersectionObserver) {
      elements.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [threshold, rootMargin]);
};

export default useScrollAnimation;
