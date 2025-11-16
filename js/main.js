// ==================== LOADING SCREEN ====================
// Ensure page starts at top
window.scrollTo(0, 0);

window.addEventListener('load', () => {
    // Keep page at top during load
    window.scrollTo(0, 0);

    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Ensure we're still at top after loading screen disappears
        window.scrollTo(0, 0);
    }, 2000); // Hide after 2 seconds
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== SMOOTH SCROLL NAVIGATION ====================
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

// ==================== FORM SUBMISSION ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.cta-button');
        const originalText = submitBtn.querySelector('span').textContent;

        // Show success message
        submitBtn.querySelector('span').textContent = '> Message Sent Successfully';
        submitBtn.style.borderColor = 'var(--primary)';

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.querySelector('span').textContent = originalText;
        }, 3000);

        // In production, you would send the data to a server here
        console.log('%c> Form submitted successfully', 'color: #00ff88; font-family: monospace;');
    });
}

// ==================== CONSOLE EASTER EGG ====================
console.log('%c> ALEX CHEN PORTFOLIO INITIALIZED', 'color: #00ff88; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%c> Software Engineer | Full-Stack Developer', 'color: #0088ff; font-size: 14px; font-family: monospace;');
console.log('%c> Type help() for available commands', 'color: rgba(255, 255, 255, 0.7); font-size: 12px; font-family: monospace;');

// Fun console commands
window.help = function() {
    console.log('%c=== AVAILABLE COMMANDS ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cabout() - Learn about me', 'color: #fff; font-family: monospace;');
    console.log('%cstats() - View my statistics', 'color: #fff; font-family: monospace;');
    console.log('%cexperience() - View work history', 'color: #fff; font-family: monospace;');
    console.log('%cprojects() - See featured projects', 'color: #fff; font-family: monospace;');
    console.log('%cskills() - List my tech stack', 'color: #fff; font-family: monospace;');
    console.log('%ccontact() - Get in touch', 'color: #fff; font-family: monospace;');
};

window.about = function() {
    console.log('%c> Passionate software engineer with 5+ years of experience', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Specializing in full-stack development and scalable web applications', 'color: #0088ff; font-family: monospace;');
    console.log('%c> Built with vanilla HTML, CSS, and JavaScript', 'color: rgba(255, 255, 255, 0.7); font-family: monospace;');
};

window.stats = function() {
    console.log('%c> Experience: 5+ Years', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Projects: 50+', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Commits: 10K+', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Coffee: ∞', 'color: #00ff88; font-family: monospace;');
};

window.experience = function() {
    console.log('%c[2022 - Present] Senior Software Engineer @ TechCorp Solutions', 'color: #00ff88; font-family: monospace;');
    console.log('%c[2020 - 2022] Full-Stack Developer @ StartupHub Inc.', 'color: #00ff88; font-family: monospace;');
    console.log('%c[2018 - 2020] Software Developer @ DevWorks Agency', 'color: #00ff88; font-family: monospace;');
};

window.projects = function() {
    console.log('%c[01] E-Commerce Platform - React, Node.js, PostgreSQL', 'color: #00ff88; font-family: monospace;');
    console.log('%c[02] Task Automation Tool - Python, OpenAI API, Docker', 'color: #00ff88; font-family: monospace;');
    console.log('%c[03] Real-Time Analytics Dashboard - TypeScript, React, Redis', 'color: #00ff88; font-family: monospace;');
};

window.skills = function() {
    console.log('%c> React | Node.js | Python | Docker | Kubernetes', 'color: #00ff88; font-family: monospace;');
    console.log('%c> AWS | TypeScript | PostgreSQL', 'color: #00ff88; font-family: monospace;');
};

window.contact = function() {
    console.log('%c> Scrolling to contact section...', 'color: #00ff88; font-family: monospace;');
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
};

// ==================== SCROLL ANIMATIONS ====================
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

// Observe sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ==================== TYPING EFFECT ====================
function typeWriter(element, text, speed = 50) {
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

// Enable typing effect on hero title
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.textContent;
            typeWriter(heroTitle, text, 80);
        }
    }, 2200); // Start after loading screen finishes
});

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c> Page loaded in ${pageLoadTime}ms`, 'color: #0088ff; font-family: monospace;');
    });
}
