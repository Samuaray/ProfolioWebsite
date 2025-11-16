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
        submitBtn.querySelector('span').textContent = '> Command Executed Successfully';
        submitBtn.style.borderColor = var(--primary);

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
console.log('%c> NEXTECH SYSTEMS ONLINE', 'color: #00ff88; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%c> All systems operational', 'color: #0088ff; font-size: 14px; font-family: monospace;');
console.log('%c> Type help() for available commands', 'color: rgba(255, 255, 255, 0.7); font-size: 12px; font-family: monospace;');

// Fun console commands
window.help = function() {
    console.log('%c=== NEXTECH COMMAND LIST ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cabout() - Learn about this portfolio', 'color: #fff; font-family: monospace;');
    console.log('%cstats() - View portfolio statistics', 'color: #fff; font-family: monospace;');
    console.log('%cservices() - List available services', 'color: #fff; font-family: monospace;');
    console.log('%ccontact() - Get contact information', 'color: #fff; font-family: monospace;');
};

window.about = function() {
    console.log('%c> High-tech portfolio built with vanilla HTML, CSS, and JavaScript', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Terminal-inspired design with circuit board aesthetics', 'color: #0088ff; font-family: monospace;');
};

window.stats = function() {
    console.log('%c> Projects: 500+', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Clients: 250+', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Uptime: 99.9%', 'color: #00ff88; font-family: monospace;');
    console.log('%c> Countries: 45+', 'color: #00ff88; font-family: monospace;');
};

window.services = function() {
    console.log('%c[01] System Architecture', 'color: #00ff88; font-family: monospace;');
    console.log('%c[02] Cloud Infrastructure', 'color: #00ff88; font-family: monospace;');
    console.log('%c[03] AI Integration', 'color: #00ff88; font-family: monospace;');
};

window.contact = function() {
    console.log('%c> Scroll to contact section to get in touch', 'color: #00ff88; font-family: monospace;');
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

// ==================== TYPING EFFECT (optional) ====================
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

// Uncomment to enable typing effect on hero title
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const text = heroTitle.textContent;
//         typeWriter(heroTitle, text, 100);
//     }
// });

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c> Page loaded in ${pageLoadTime}ms`, 'color: #0088ff; font-family: monospace;');
    });
}
