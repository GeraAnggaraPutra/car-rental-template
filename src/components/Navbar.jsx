import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <a class="navbar-brand" href="/">
          Car<span>Book</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/services" class="nav-link">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/pricing" class="nav-link">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cars" class="nav-link">
                Cars
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" class="nav-link">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
