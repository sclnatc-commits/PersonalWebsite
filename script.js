/**
 * Minimal JavaScript for Portfolio Website
 * Features: Dark mode toggle, mobile menu, smooth scroll, show/hide skills
 */

(function() {
    'use strict';

    // ========================================================================
    // Dark Mode Toggle
    // ========================================================================
    const darkModeBtn = document.getElementById('darkModeBtn');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }

    // Dark mode toggle function
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcon(isDark);
    }

    // Update dark mode icon
    function updateDarkModeIcon(isDark) {
        if (darkModeBtn) {
            const icon = darkModeBtn.querySelector('.dark-mode-icon');
            if (icon) {
                icon.textContent = isDark ? '☀️' : '🌙';
            }
        }
    }

    // Attach dark mode toggle event
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }

    // ========================================================================
    // Mobile Navigation Menu
    // ========================================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    function toggleMobileMenu() {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
        if (hamburger) {
            hamburger.classList.toggle('active');
        }
    }

    // Toggle mobile menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        }
    });

    // ========================================================================
    // Smooth Scroll for Navigation Links
    // Note: CSS scroll-behavior: smooth handles this, but we add offset for sticky header
    // ========================================================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Height of sticky navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================================================
    // Show/Hide Skills Functionality
    // ========================================================================
    const showMoreBtn = document.getElementById('showMoreBtn');
    const skillsGrid = document.getElementById('skillsGrid');

    if (showMoreBtn && skillsGrid) {
        const allSkills = Array.from(skillsGrid.children);
        const initialCount = 15; // Number of skills to show initially
        let skillsExpanded = false;

        // Hide skills beyond initial count if there are more than initialCount
        if (allSkills.length > initialCount) {
            allSkills.slice(initialCount).forEach(skill => {
                skill.style.display = 'none';
            });

            showMoreBtn.addEventListener('click', function() {
                if (!skillsExpanded) {
                    // Show all skills
                    allSkills.forEach(skill => {
                        skill.style.display = '';
                    });
                    this.textContent = 'Show Less';
                    skillsExpanded = true;
                } else {
                    // Hide skills beyond initial count
                    allSkills.slice(initialCount).forEach(skill => {
                        skill.style.display = 'none';
                    });
                    this.textContent = 'Show More';
                    skillsExpanded = false;
                }
            });
        } else {
            // Hide button if there are 15 or fewer skills
            showMoreBtn.style.display = 'none';
        }
    }

    // ========================================================================
    // Update Copyright Year
    // ========================================================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ========================================================================
    // Scroll-triggered Animations (Optional Enhancement)
    // ========================================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.cert-card, .project-card, .timeline-item, .skill-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // ========================================================================
    // Navbar Shadow on Scroll (Visual Enhancement)
    // ========================================================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = 'var(--shadow-sm)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

})();

