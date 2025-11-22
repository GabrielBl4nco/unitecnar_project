document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero');
  const img = document.querySelector('.hero-image img');
  const toggleBtn = document.getElementById('toggle-anim');

  // Animation references
  let heroAnim = null;
  let imgAnim = null;
  let animationsEnabled = true;

  function createAnimations() {
    try {
      if (hero && !heroAnim) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(20px)';
        heroAnim = hero.animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
      }

      if (img && !imgAnim) {
        img.style.opacity = 0;
        img.style.transform = 'scale(0.96)';
        imgAnim = img.animate([
          { opacity: 0, transform: 'scale(0.96)' },
          { opacity: 1, transform: 'scale(1)' }
        ], { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards', delay: 200 });
      }
    } catch (e) {
      console.warn('Animation failed', e);
    }
  }

  function pauseAnimations() {
    animationsEnabled = false;
    if (heroAnim) heroAnim.pause();
    if (imgAnim) imgAnim.pause();
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.textContent = 'Reanudar animaciones';
  }

  function resumeAnimations() {
    animationsEnabled = true;
    if (heroAnim) heroAnim.play();
    if (imgAnim) imgAnim.play();
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.textContent = 'Pausar animaciones';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      if (animationsEnabled) pauseAnimations(); else resumeAnimations();
    });
  }

  // Create animations on load
  createAnimations();
});

// Small entrance on scroll for other sections (optional)
function revealOnScroll() {
  const reveals = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
