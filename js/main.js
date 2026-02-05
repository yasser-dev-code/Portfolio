// main.js
// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        navToggle.setAttribute('aria-label', 'Close navigation menu');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close mobile menu when clicking outside
function handleClickOutside(event) {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(event.target) && 
        !navToggle.contains(event.target)) {
        closeMobileMenu();
    }
}

// Back to Top Button
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contact Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // In a real implementation, you would send this data to a server
    // For now, simulate API call with setTimeout
    setTimeout(() => {
        // Success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Update active nav link on scroll
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    // Reset all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Special case for home link
    if (scrollPosition < 100) {
        document.querySelector('a[href="index.html"]').classList.add('active');
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Initialize Code Highlighting
function initCodeHighlighting() {
    // This function would be expanded with a proper syntax highlighter library
    // For now, we'll just add basic styling
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Simple keyword highlighting for demo purposes
        const code = block.textContent;
        const highlighted = code
            .replace(/\b(const|let|var|function|return|if|else|for|while)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="literal">$1</span>')
            .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
        
        block.innerHTML = highlighted;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize code highlighting
    initCodeHighlighting();
    
    // Set up event listeners
    themeToggle.addEventListener('click', toggleTheme);
    navToggle.addEventListener('click', toggleMobileMenu);
    backToTop.addEventListener('click', scrollToTop);
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', handleClickOutside);
    
    // Set up scroll event listeners
    window.addEventListener('scroll', () => {
        handleBackToTop();
        updateActiveNavLink();
    });
    
    // Initial call to set the correct state
    handleBackToTop();
    updateActiveNavLink();
});

// Add CSS for syntax highlighting
const style = document.createElement('style');
style.textContent = `
    .keyword { color: #d73a49; font-weight: 600; }
    .string { color: #032f62; }
    .number { color: #005cc5; }
    .literal { color: #005cc5; font-weight: 600; }
    .comment { color: #6a737d; font-style: italic; }
    
    [data-theme="dark"] .keyword { color: #ff7b72; }
    [data-theme="dark"] .string { color: #a5d6ff; }
    [data-theme="dark"] .number { color: #79c0ff; }
    [data-theme="dark"] .literal { color: #79c0ff; }
    [data-theme="dark"] .comment { color: #8b949e; }
`;
document.head.appendChild(style);