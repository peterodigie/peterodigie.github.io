---
layout: default
title: Home
---

<div class="bg-dark text-secondary px-4 py-5 text-center" style="background-image: linear-gradient(180deg, rgba(5, 17, 69, 0.9), rgba(0, 0, 0, 0.9)); background-size: cover;">
  <div class="py-5">
    <h1 class="display-5 fw-bold text-white">Peter Odigie</h1>
    <div class="col-lg-6 mx-auto">
      <p class="fs-5 mb-4 text-white">Welcome to my personal website where I share my thoughts, projects, and experiences.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="{{ '/about' | relative_url }}" class="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold">About Me</a>
        <a href="{{ '/blog' | relative_url }}" class="btn btn-outline-light btn-lg px-4">Read My Blog</a>
      </div>
    </div>
  </div>
</div>

<div class="container px-4 py-5" id="featured-posts">
  <h2 class="pb-2 border-bottom">Recent Posts</h2>

  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    {% for post in site.posts limit:3 %}
    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h3 class="card-title h5">{{ post.title | escape }}</h3>
          <p class="card-text text-muted small">{{ post.date | date: "%B %-d, %Y" }}</p>
          <p class="card-text">{{ post.excerpt }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="text-center mt-4">
    <a href="{{ '/blog' | relative_url }}" class="btn btn-lg btn-outline-primary">View All Posts</a>
  </div>
</div>

<div class="bg-light">
  <div class="container px-4 py-5">
    <div class="row align-items-center g-5 py-5">
      <div class="col-lg-6">
        <h2 class="fw-bold lh-1 mb-3">About Me</h2>
        <p class="lead">I'm a passionate professional with experience in web development, design, and content creation.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="{{ '/about' | relative_url }}" class="btn btn-primary btn-lg px-4 me-md-2">Learn More</a>
          <a href="{{ '/contact' | relative_url }}" class="btn btn-outline-secondary btn-lg px-4">Contact Me</a>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="p-5 bg-dark bg-gradient rounded-3 text-white">
          <h3>My Skills</h3>
          <ul class="list-unstyled">
            <li class="mb-2">Web Development</li>
            <li class="mb-2">User Experience Design</li>
            <li class="mb-2">Content Creation</li>
            <li class="mb-2">Project Management</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> 