// ===========================
// PARTICLE BACKGROUND SYSTEM
// ===========================

class ParticleSystem {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    this.connectionDistance = 150;
    this.mouse = { x: null, y: null, radius: 150 };
    
    this.init();
  }

  init() {
    // Style canvas
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '0';
    this.canvas.style.opacity = '0.6';
    
    document.body.prepend(this.canvas);
    
    this.resize();
    this.createParticles();
    this.animate();
    
    // Event listeners
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    
    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    
    // Get theme colors
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const color = isDark ? '0, 217, 255' : '0, 112, 243';
    
    this.ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;
    this.ctx.fill();
  }

  connectParticles() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * 0.3;
          const color = isDark ? '0, 217, 255' : '0, 112, 243';
          
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(${color}, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  updateParticles() {
    for (let particle of this.particles) {
      // Move particle
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Mouse interaction
      if (this.mouse.x != null && this.mouse.y != null) {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.mouse.radius) {
          const force = (this.mouse.radius - distance) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.2;
          particle.vy -= Math.sin(angle) * force * 0.2;
        }
      }

      // Boundary check
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Keep minimum speed
      if (Math.abs(particle.vx) < 0.1) particle.vx = (Math.random() - 0.5) * 0.5;
      if (Math.abs(particle.vy) < 0.1) particle.vy = (Math.random() - 0.5) * 0.5;
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.updateParticles();
    this.connectParticles();
    
    for (let particle of this.particles) {
      this.drawParticle(particle);
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particles when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ParticleSystem());
} else {
  new ParticleSystem();
}
