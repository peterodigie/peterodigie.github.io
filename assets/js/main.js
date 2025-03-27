// Main JavaScript file for the site

document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current navigation item
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation === linkPath || 
        (linkPath !== '/' && currentLocation.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple mobile menu toggle (if needed)
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('show');
    });
  }
});

// Add a CSS class when scrolling for styling purposes
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}); 