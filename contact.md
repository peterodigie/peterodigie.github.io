---
layout: default
title: Contact
permalink: /contact/
---

<div class="container py-5">
  <div class="row mb-5">
    <div class="col-lg-8 mx-auto text-center">
      <h1 class="display-5 fw-bold mb-4">Get in Touch</h1>
      <p class="lead">Ideas evolve in conversation. If you'd like to connect, share thoughts, or collaborate, use the form below.</p>
    </div>
  </div>
  
  <div class="row g-5">
    <div class="col-md-5 mb-5">
      <div class="card bg-light shadow-sm h-100">
        <div class="card-body">
          <h2 class="h4 fw-bold mb-4">Connect With Me</h2>
          
          <div class="mb-4">
            <h3 class="h5">Email</h3>
            <p><a href="mailto:peterodigie@omg.lol" class="text-decoration-none">peterodigie@omg.lol</a></p>
          </div>
          
          <div class="mb-4">
            <h3 class="h5">Social Platforms</h3>
            <p class="text-muted">Join the conversation about cognition, language, and social structures.</p>
            <div class="d-flex gap-2 mt-3">
              <a href="#" class="btn btn-outline-dark" target="_blank">LinkedIn</a>
              <a href="#" class="btn btn-outline-dark" target="_blank">Twitter</a>
              <a href="#" class="btn btn-outline-dark" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-md-7">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2 class="h4 fw-bold mb-4">Send a Message</h2>
          
          <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" name="name" required>
            </div>
            
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="_replyto" required>
            </div>
            
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <select class="form-select" id="subject" name="subject">
                <option selected>Choose a topic</option>
                <option value="Cognition & Perception">Cognition & Perception</option>
                <option value="Language & Reality">Language & Reality</option>
                <option value="Systems & Structures">Systems & Structures</option>
                <option value="Self & Agency">Self & Agency</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Bootstrap form validation
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }
</script> 