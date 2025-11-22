document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero');
  const img = document.querySelector('.hero-image img');

  try {
    if (hero) {
      hero.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }
      );
    }

    if (img) {
      img.animate(
        [
          { opacity: 0, transform: 'scale(0.96)' },
          { opacity: 1, transform: 'scale(1)' }
        ],
        { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards', delay: 200 }
      );
    }
  } catch (e) {
    console.warn('Animation failed', e);
  }
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
