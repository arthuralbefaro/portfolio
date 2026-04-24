const siteHeader = document.querySelector('.site-header');
const navbar = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.site-nav .nav-link');
const scrollProgressBar = document.querySelector('.scroll-progress-bar');

let lastScrollY = 0;

function updateScrollProgress() {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
  
  lastScrollY = window.scrollY;
  updateActiveLink();
  updateScrollProgress();
});

function updateActiveLink() {
  const sections = document.querySelectorAll('section, header');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  if (currentSection) {
    const activeLink = document.querySelector(`.site-nav a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const bsCollapse = new bootstrap.Collapse(navbar, {
        toggle: false
      });
      bsCollapse.hide();
      
      const targetId = href.substring(1);
      
      if (targetId === 'inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.site-header').clientHeight;
          let targetPosition = targetElement.offsetTop - headerHeight;
          
          if (targetPosition < 0) {
            targetPosition = 0;
          }
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      setTimeout(() => {
        updateActiveLink();
      }, 100);
    }
  });
});

window.addEventListener('load', updateActiveLink);
updateActiveLink();
