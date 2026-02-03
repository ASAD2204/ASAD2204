// ===========================
// ENHANCED SPLASH SCREEN
// ===========================
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const loaderBar = document.querySelector('.loader-bar');
  const loadingText = document.querySelector('.splash-loading-text');
  const statusText = document.querySelector('.splash-status');
  const particlesContainer = document.getElementById('splashParticles');
  
  if (!splash) return;
  
  // Generate subtle glass particles
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particlesContainer.appendChild(particle);
    }
  }
  
  let progress = 0;
  const messages = [
    'Initializing...',
    'Loading assets...',
    'Preparing interface...',
    'Almost ready...'
  ];
  
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 10;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      if (loadingText) loadingText.textContent = '100%';
      if (statusText) statusText.textContent = 'Ready!';
      if (loaderBar) loaderBar.style.width = '100%';
      
      setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
          splash.style.display = 'none';
        }, 800);
      }, 500);
    } else {
      const rounded = Math.floor(progress);
      if (loadingText) loadingText.textContent = rounded + '%';
      if (loaderBar) loaderBar.style.width = rounded + '%';
      
      const messageIndex = Math.floor((progress / 100) * messages.length);
      if (statusText && messages[messageIndex]) {
        statusText.textContent = messages[messageIndex];
      }
    }
  }, 150);
});

// ===========================
// THEME TOGGLE
// ===========================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('.theme-icon');
  if (theme === 'dark') {
    // Moon icon for dark mode
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  } else {
    // Sun icon for light mode
    icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  }
}

// ===========================
// MOBILE NAVIGATION
// ===========================
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===========================
// TYPEWRITER EFFECT
// ===========================
const typewriter = document.getElementById('typewriter');
if (typewriter) {
  const texts = [
    'Software Developer',
    'AI Engineer',
    'Full-Stack Developer',
    'Teaching Assistant',
    'Community Leader'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typewriter.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriter.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ===========================
// COUNTER ANIMATION
// ===========================
const counters = document.querySelectorAll('.stat-value, .stat-number');
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
      observer.unobserve(counter);
    }
  });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// ===========================
// SCROLL ANIMATIONS
// ===========================
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.about-card, .featured-card, .project-card, .timeline-item, .info-card, .achievement-card, .cert-card');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.classList.add('animated');
        }, index * 100);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(element);
  });
};

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
  animateOnScroll();
}

// ===========================
// FORM HANDLING
// ===========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:asadrafaqat2021@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert(`Thank you for your message, ${name}! Your email client will open to send the message.`);
    contactForm.reset();
  });
}

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================
// Only run on single-page layouts with hash-based navigation
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  // Check if any nav links use hash-based navigation (e.g., #about, #contact)
  const hasHashLinks = Array.from(navLinksArray).some(link => link.getAttribute('href').startsWith('#'));
  
  // Only update if we have hash-based navigation (single-page layout)
  if (!hasHashLinks || sections.length === 0) return;
  
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Only add scroll listener if we have hash-based navigation
const hasHashLinks = Array.from(navLinksArray).some(link => link.getAttribute('href').startsWith('#'));
if (hasHashLinks && sections.length > 0) {
  window.addEventListener('scroll', updateActiveNav);
}

// ===========================
// CURSOR EFFECT (Optional Enhancement)
// ===========================
const createCursorEffect = () => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Add hover effect for links and buttons
  const interactiveElements = document.querySelectorAll('a, button, .btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
};

// Uncomment to enable cursor effect (only on desktop)
// if (window.innerWidth > 768) {
//   createCursorEffect();
// }

// ===========================
// SEARCH FUNCTIONALITY (for projects page)
// ===========================
const searchInput = document.getElementById('search');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.project-category')?.textContent.toLowerCase() || '';

      if (title.includes(query) || description.includes(query) || category.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// ===========================
// LOADING ANIMATION
// ===========================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===========================
// CONSOLE EASTER EGG
// ===========================
console.log('%c👋 Hi there!', 'font-size: 2em; font-weight: bold; color: #00d9ff;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 1.2em; color: #667eea;');
console.log('%c📧 asad@example.com', 'font-size: 1em; color: #a8b2d1;');
