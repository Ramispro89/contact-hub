// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.9)';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Animate skill progress bars
      if (entry.target.classList.contains('skill-card')) {
        const progressBar = entry.target.querySelector('.progress-bar');
        const progress = progressBar.dataset.progress;
        setTimeout(() => {
          progressBar.style.width = progress + '%';
        }, 200);
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .resume-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroParticles = document.querySelector('.hero-particles');
  if (heroParticles) {
    heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Form submission
const contactForm = document.querySelector('.form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Simulate form submission
  const submitBtn = document.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background = 'linear-gradient(135deg, var(--primary-emerald), var(--secondary-emerald))';
      contactForm.reset();
    }, 2000);
  }, 1500);
});

// Resume download
document.querySelector('.resume-download').addEventListener('click', () => {
  // Create a simple PDF download simulation
  const link = document.createElement('a');
  link.href = '#'; // In a real application, this would be the path to your PDF
  link.download = 'Alex_Morgan_Resume.pdf';
  
  // Show download message
  const btn = document.querySelector('.resume-download');
  const originalText = btn.textContent;
  btn.textContent = 'Downloading...';
  
  setTimeout(() => {
    btn.textContent = 'Downloaded!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  }, 1000);
});

// Hero CTA button
document.querySelector('.hero-cta').addEventListener('click', () => {
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth'
  });
});

// Add floating animation to elements
function addFloatingAnimation() {
  const floatingElements = document.querySelectorAll('.skill-card, .project-card');
  
  floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add('floating');
  });
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
  .floating {
    animation: floating 6s ease-in-out infinite;
  }
  
  @keyframes floating {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .nav-menu.active {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
  }
`;
document.head.appendChild(style);

// Initialize floating animation
addFloatingAnimation();

// Typewriter effect for hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typewriter effect
window.addEventListener('load', () => {
  const subtitle = document.querySelector('.hero-subtitle');
  const originalText = subtitle.textContent;
  setTimeout(() => {
    typeWriter(subtitle, originalText, 80);
  }, 1000);
});

// Add particle effect to hero section
function createParticles() {
  const particlesContainer = document.querySelector('.hero-particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#10b981';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particle.style.animation = `particleFloat ${Math.random() * 10 + 5}s linear infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(50px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Add 3D tilt effect to cards
function addTiltEffect() {
  const cards = document.querySelectorAll('.skill-card, .project-card, .resume-section');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// Initialize tilt effect
addTiltEffect();