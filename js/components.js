/* ============================================
   WHY: Centralized header and footer components.
   Edit ONCE, and it updates EVERY page.
   ============================================ */

function loadHeader() {
    const headerHTML = `
        <header class="header">
            <nav class="navbar">
                <div class="container">
                    <div class="nav-wrapper">
                        <a href="index.html" class="logo">
                            <img src="assets/icons/logo.svg" alt="Mainstreet Web Buzz" class="logo-img">
                            <span class="logo-text">Mainstreet <span class="logo-highlight">Web Buzz</span></span>
                        </a>
                        <button class="menu-toggle" aria-label="Toggle navigation menu">
                            <span class="hamburger"></span>
                        </button>
                        <ul class="nav-menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="packages.html">Packages</a></li>
                            <li><a href="guerrilla-marketing.html">Guerrilla Marketing</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html" class="btn-cta-nav">Get Started</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-menu a:not(.btn-cta-nav)');
    links.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="index.html" class="footer-logo">
                            <img src="assets/icons/logo.svg" alt="Mainstreet Web Buzz" class="footer-logo-img">
                            Mainstreet <span class="logo-highlight">Web Buzz</span>
                        </a>
                        <p>Websites + Guerrilla Marketing for small businesses in Southern California and Orange County.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="packages.html">Packages</a></li>
                            <li><a href="guerrilla-marketing.html">Guerrilla Marketing</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="services.html#websites">Website Design</a></li>
                            <li><a href="services.html#branding">Branding & Print</a></li>
                            <li><a href="guerrilla-marketing.html">Guerrilla Marketing</a></li>
                            <li><a href="packages.html">Business Packages</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact</h4>
                        <ul class="contact-info">
                            <li><i class="fas fa-envelope"></i> <a href="mailto:info@mainstreetweb.buzz">info@mainstreetweb.buzz</a></li>
                            <li><i class="fas fa-phone"></i> <a href="tel:+17145551234">(714) 555-1234</a></li>
                            <li><i class="fas fa-map-marker-alt"></i> Orange County, CA</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Mainstreet Web Buzz. All rights reserved. Serving Southern California &amp; Orange County.</p>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});