/* ============================================
   WHY: All interactive functionality for Mainstreet Web Buzz.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    /* ============================================
       WHY: Mobile menu toggle
       ============================================ */
    document.addEventListener('click', function(e) {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!menuToggle || !navMenu) return;

        if (menuToggle.contains(e.target)) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            return;
        }

        if (navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        if (!navMenu || !menuToggle) return;

        if (e.target.closest('.nav-menu a')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    /* ============================================
       WHY: Header shadow on scroll
       ============================================ */
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    /* ============================================
       WHY: Dynamic blog posts loaded from JSON
       ============================================ */
    function loadBlogPosts() {
        console.log('🔄 Loading blog posts...');

        fetch('data/posts.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to load posts.json');
                }
                return response.json();
            })
            .then(function(posts) {
                console.log('✅ Posts loaded:', posts);

                const blogGrid = document.getElementById('blog-grid');
                if (!blogGrid) {
                    console.log('⚠️ Blog grid not found on this page');
                    return;
                }

                blogGrid.innerHTML = '';

                posts.forEach(function(post) {
                    const postCard = document.createElement('article');
                    postCard.className = 'blog-card';
                    postCard.innerHTML = `
                        <img src="assets/images/${post.image}" alt="${post.title}" loading="lazy">
                        <div class="blog-card-content">
                            <span class="blog-date">${post.date}</span>
                            <h2><a href="${post.url}">${post.title}</a></h2>
                            <p>${post.excerpt}</p>
                            <a href="${post.url}" class="read-more">Read Full Article →</a>
                        </div>
                    `;
                    blogGrid.appendChild(postCard);
                });

                console.log('✅ Blog posts rendered!');
            })
            .catch(function(error) {
                console.error('❌ Error loading blog posts:', error);
                const blogGrid = document.getElementById('blog-grid');
                if (blogGrid) {
                    blogGrid.innerHTML = `<p style="text-align:center;color:var(--gray);">No blog posts available yet. Check back soon!</p>`;
                }
            });
    }

    /* ============================================
       WHY: Dynamic package cards loaded from JSON
       ============================================ */
    function loadPackages() {
        console.log('🔄 Loading packages...');

        fetch('data/packages.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to load packages.json');
                }
                return response.json();
            })
            .then(function(packages) {
                console.log('✅ Packages loaded:', packages);

                const packageGrid = document.getElementById('packages-grid');
                if (!packageGrid) {
                    console.log('⚠️ Packages grid not found on this page');
                    return;
                }

                packageGrid.innerHTML = '';

                packages.forEach(function(pkg, index) {
                    const packageCard = document.createElement('div');
                    packageCard.className = 'package-card';
                    if (index === 1) {
                        packageCard.classList.add('featured');
                    }
                    packageCard.innerHTML = `
                        <div class="package-header">
                            <h3>${pkg.name}</h3>
                            <div class="package-price">${pkg.price}</div>
                        </div>
                        <ul>
                            ${pkg.features.map(function(feature) {
                                return `<li><i class="fas fa-check-circle"></i> ${feature}</li>`;
                            }).join('')}
                        </ul>
                        <a href="contact.html" class="btn-primary" style="width:100%;text-align:center;">Get Started</a>
                    `;
                    packageGrid.appendChild(packageCard);
                });

                console.log('✅ Packages rendered!');
            })
            .catch(function(error) {
                console.error('❌ Error loading packages:', error);
                const packageGrid = document.getElementById('packages-grid');
                if (packageGrid) {
                    packageGrid.innerHTML = `<p style="text-align:center;color:var(--gray);">Packages coming soon. Contact us for a custom quote!</p>`;
                }
            });
    }

    loadBlogPosts();
    loadPackages();

    console.log('🚀 Mainstreet Web Buzz loaded successfully!');
});