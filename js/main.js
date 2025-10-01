// Year update
document.getElementById('year').textContent = new Date().getFullYear();

// Splash logo shrink after animation
setTimeout(()=>{
  document.getElementById('splash').classList.add('shrink');
}, 2200);

// Hide splash completely after shrink animation
setTimeout(()=>{
  const splash = document.getElementById('splash');
  splash.style.pointerEvents = 'none';
}, 3000);

// Reveal projects with stagger effect
const cards = document.querySelectorAll('.card-proj');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const delay = entry.target.dataset.delay || 0;
      setTimeout(()=> entry.target.classList.add('reveal'), delay);
    }
  });
}, {threshold:.12});
cards.forEach(c=>io.observe(c));

// Add scroll-triggered animations for sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold:.1});
sections.forEach(s=>{
  s.style.opacity = '0';
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity .5s ease, transform .5s ease';
  sectionObserver.observe(s);
});

// Hero section should be visible immediately
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

// Skills carousel animation control
const skillsSection = document.querySelector('.skills');
const skillCarousels = document.querySelectorAll('.skill-carousel');
const skillsObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      skillCarousels.forEach(carousel=>carousel.style.animationPlayState='running');
    } else {
      skillCarousels.forEach(carousel=>carousel.style.animationPlayState='paused');
    }
  });
}, {threshold:.3});
skillsObserver.observe(skillsSection);

// Pause animations initially
skillCarousels.forEach(carousel=>carousel.style.animationPlayState='paused');


