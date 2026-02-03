// ===========================
// CUSTOM CURSOR EFFECTS
// ===========================

class CustomCursor {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursorFollower = document.createElement('div');
    this.cursorX = 0;
    this.cursorY = 0;
    this.followerX = 0;
    this.followerY = 0;
    
    this.init();
  }

  init() {
    // Main cursor
    this.cursor.className = 'custom-cursor';
    this.cursorFollower.className = 'custom-cursor-follower';
    
    document.body.appendChild(this.cursor);
    document.body.appendChild(this.cursorFollower);
    
    // Hide default cursor only after custom cursor is ready
    document.body.style.cursor = 'none';
    document.body.classList.add('custom-cursor-active');
    
    // Add CSS to hide cursor globally when custom cursor is active
    const style = document.createElement('style');
    style.textContent = `
      body.custom-cursor-active,
      body.custom-cursor-active * {
        cursor: none !important;
      }
      body.custom-cursor-active input,
      body.custom-cursor-active textarea,
      body.custom-cursor-active select {
        cursor: text !important;
      }
    `;
    document.head.appendChild(style);
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .stat-card, .about-card, .featured-card, input, textarea');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('cursor-hover');
        this.cursorFollower.classList.add('cursor-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('cursor-hover');
        this.cursorFollower.classList.remove('cursor-hover');
      });
    });

    // Animate cursor
    this.animate();
  }

  animate() {
    // Smooth following effect
    const speed = 0.15;
    this.followerX += (this.cursorX - this.followerX) * speed;
    this.followerY += (this.cursorY - this.followerY) * speed;

    this.cursor.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
    this.cursorFollower.style.transform = `translate(${this.followerX}px, ${this.followerY}px)`;

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize custom cursor (only on desktop)
if (window.innerWidth > 768 && !('ontouchstart' in window)) {
  // DISABLED: Custom cursor feature is disabled to show normal cursor
  // Uncomment below to enable custom cursor
  /*
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new CustomCursor());
  } else {
    new CustomCursor();
  }
  */
}

// ===========================
// MAGNETIC BUTTONS
// ===========================

class MagneticButton {
  constructor(element) {
    this.element = element;
    this.boundingRect = element.getBoundingClientRect();
    this.init();
  }

  init() {
    this.element.addEventListener('mousemove', (e) => {
      const rect = this.element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 50;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = x * strength * 0.3;
        const moveY = y * strength * 0.3;
        
        this.element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = 'translate(0, 0) scale(1)';
    });
  }
}

// Apply magnetic effect to buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn, .filter-btn, .social-link');
  buttons.forEach(btn => new MagneticButton(btn));
});

// ===========================
// SMOOTH REVEAL ANIMATIONS
// ===========================

const revealElements = () => {
  const reveals = document.querySelectorAll('.reveal, .stat-card, .about-card, .featured-card, .project-card, .contact-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', revealElements);

// ===========================
// PARALLAX SCROLL EFFECT
// ===========================

const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
});

// ===========================
// FLOATING SHAPES
// ===========================

class FloatingShapes {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'floating-shapes-container';
    document.body.appendChild(this.container);
    
    this.createShapes();
  }

  createShapes() {
    const shapeCount = 8;
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement('div');
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      shape.className = `floating-shape floating-shape-${shapeType}`;
      
      // Random position and animation
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.animationDelay = `${Math.random() * 5}s`;
      shape.style.animationDuration = `${15 + Math.random() * 10}s`;
      
      this.container.appendChild(shape);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => new FloatingShapes());

// ===========================
// TEXT GRADIENT ANIMATION
// ===========================

const animateGradientText = () => {
  const gradientTexts = document.querySelectorAll('.gradient-text');
  
  gradientTexts.forEach(text => {
    text.style.backgroundSize = '200% auto';
    text.style.animation = 'gradient-shift 3s ease infinite';
  });
};

document.addEventListener('DOMContentLoaded', animateGradientText);

// ===========================
// LOADING SCREEN
// ===========================

class LoadingScreen {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-logo">
          <span class="logo-text">Muhammad<span class="logo-accent">Asad</span></span>
        </div>
        <div class="loader-bar">
          <div class="loader-progress"></div>
        </div>
      </div>
    `;
    
    document.body.appendChild(loader);
    
    // Simulate loading
    setTimeout(() => {
      loader.classList.add('loaded');
      setTimeout(() => loader.remove(), 500);
    }, 1500);
  }
}

// Only show loader on initial page load
if (!sessionStorage.getItem('visited')) {
  new LoadingScreen();
  sessionStorage.setItem('visited', 'true');
}

// ===========================
// TILT EFFECT FOR CARDS
// ===========================

class TiltEffect {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.element.addEventListener('mousemove', (e) => {
      const rect = this.element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      this.element.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tiltCards = document.querySelectorAll('.featured-card, .about-card');
  tiltCards.forEach(card => new TiltEffect(card));
});
