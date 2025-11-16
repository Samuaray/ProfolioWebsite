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

// ==================== FLOATING NAV DOTS ====================
const sections = document.querySelectorAll('.section, .hero');
const navDots = document.querySelectorAll('.nav-dots .dot');

// Update active dot on scroll
const updateActiveDot = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveDot);
updateActiveDot(); // Initial call

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ==================== SKILL BARS ANIMATION ====================
let skillBarsAnimated = false;

function animateSkillBars() {
    if (skillBarsAnimated) return;
    skillBarsAnimated = true;

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 100);
    });
}

// ==================== HORIZONTAL PROJECT SCROLL ====================
const projectsContainer = document.querySelector('.projects-scroll-container');

if (projectsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    projectsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        projectsContainer.style.cursor = 'grabbing';
        startX = e.pageX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
    });

    projectsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });

    projectsContainer.addEventListener('mouseup', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });

    projectsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        projectsContainer.scrollLeft = scrollLeft - walk;
    });

    // Set cursor
    projectsContainer.style.cursor = 'grab';
}

// ==================== FORM SUBMISSION ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the data to a server
        // For now, we'll just log it and show a message
        console.log('Form submitted:', { name, email, message });

        // Show success message
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#4caf50';

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ==================== MICRO-INTERACTIONS ====================
// Add hover effects to cards
const cards = document.querySelectorAll('.glass');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== STATS COUNTER ANIMATION ====================
const stats = document.querySelectorAll('.stat-card h4');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;

    const statSection = document.querySelector('.about');
    const rect = statSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        statsAnimated = true;

        stats.forEach(stat => {
            const target = stat.textContent;
            const isNumber = target.match(/\d+/);

            if (isNumber) {
                const number = parseInt(isNumber[0]);
                const suffix = target.replace(number, '');
                let current = 0;
                const increment = number / 50;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.textContent = number + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
            }
        });
    }
};

window.addEventListener('scroll', animateStats);

// ==================== PARALLAX EFFECT FOR HERO ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// ==================== MOBILE MENU (if needed) ====================
// Add this if you want to add a mobile hamburger menu later
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        // Mobile menu logic here
        console.log('Mobile view detected');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    const heroElements = document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #0066FF;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 16px; color: #666;');

// ==================== UTILITY: DEBOUNCE ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounce for scroll events if needed
const debouncedScroll = debounce(() => {
    // Additional scroll logic here
}, 100);

window.addEventListener('scroll', debouncedScroll);
