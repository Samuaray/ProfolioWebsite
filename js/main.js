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

// ==================== AUTO-HIDE HEADER ====================
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let mouseHoverTimeout;

// Hide/show header based on scroll
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
        // Always show header when near top
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        header.classList.add('header-hidden');
        header.classList.remove('header-visible');
    } else {
        // Scrolling up - show header
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }

    lastScrollY = currentScrollY;
});

// Show header when mouse hovers at top of screen
document.addEventListener('mousemove', (e) => {
    // Clear any existing timeout
    clearTimeout(mouseHoverTimeout);

    // If mouse is in top 50px of screen
    if (e.clientY < 50 && window.scrollY > 100) {
        // Wait 300ms before showing (prevents accidental triggers)
        mouseHoverTimeout = setTimeout(() => {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }, 300);
    } else if (e.clientY > 150 && window.scrollY > 100) {
        // If mouse moves away from top, hide header again if scrolled down
        mouseHoverTimeout = setTimeout(() => {
            if (window.scrollY > 100) {
                header.classList.add('header-hidden');
                header.classList.remove('header-visible');
            }
        }, 500);
    }
});

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

// ==================== CONSOLE EASTER EGG ====================
console.log('%c> SAMUEL ARAYA PORTFOLIO INITIALIZED', 'color: #00ff88; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%c> Software Engineer | Full-Stack Developer', 'color: #0088ff; font-size: 14px; font-family: monospace;');
console.log('%c> Type help() for available commands', 'color: rgba(255, 255, 255, 0.7); font-size: 12px; font-family: monospace;');

// Fun console commands
window.help = function() {
    console.log('%c=== AVAILABLE COMMANDS ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cabout() - Learn about me', 'color: #fff; font-family: monospace;');
    console.log('%cstats() - View my statistics', 'color: #fff; font-family: monospace;');
    console.log('%cexperience() - View work history', 'color: #fff; font-family: monospace;');
    console.log('%ceducation() - View education & certifications', 'color: #fff; font-family: monospace;');
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

window.education = function() {
    console.log('%c[2014 - 2018] BS Computer Science @ University of Technology', 'color: #00ff88; font-family: monospace;');
    console.log('%c[2020] AWS Certified Solutions Architect', 'color: #00ff88; font-family: monospace;');
    console.log('%c[2021] Kubernetes Application Developer (CKAD)', 'color: #00ff88; font-family: monospace;');
};

window.projects = function() {
    console.log('%c[01] E-Commerce Platform - React, Node.js, PostgreSQL', 'color: #00ff88; font-family: monospace;');
    console.log('%c[02] Task Automation Tool - Python, OpenAI API, Docker', 'color: #00ff88; font-family: monospace;');
    console.log('%c[03] Real-Time Analytics Dashboard - TypeScript, React, Redis', 'color: #00ff88; font-family: monospace;');
};

window.skills = function() {
    console.log('%c=== FRONTEND ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cReact • TypeScript • JavaScript • Vue.js • HTML5 • CSS3 • Tailwind • Next.js', 'color: #fff; font-family: monospace;');
    console.log('%c\n=== BACKEND ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cNode.js • Python • Express • FastAPI • GraphQL • REST APIs • WebSockets • Microservices', 'color: #fff; font-family: monospace;');
    console.log('%c\n=== DEVOPS & CLOUD ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cAWS • Docker • Kubernetes • CI/CD • GitHub Actions • Terraform • Linux • Nginx', 'color: #fff; font-family: monospace;');
    console.log('%c\n=== DATABASES ===', 'color: #00ff88; font-weight: bold; font-family: monospace;');
    console.log('%cPostgreSQL • MongoDB • Redis • MySQL • DynamoDB • Elasticsearch', 'color: #fff; font-family: monospace;');
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

// ==================== MATRIX RAIN EFFECT ====================
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    const intervalId = setInterval(draw, 33);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    return intervalId;
}

// Start matrix rain after loading screen
window.addEventListener('load', () => {
    setTimeout(initMatrixRain, 2000);
});

// ==================== 3D CARD TILT EFFECT ====================
function initCardTilt() {
    const cards = document.querySelectorAll('.service-card, .stat-box');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Initialize card tilt after page loads
window.addEventListener('load', () => {
    setTimeout(initCardTilt, 2500);
});

// ==================== PROJECT MODAL ====================
const projectData = {
    ecommerce: {
        icon: '🛒',
        title: 'E-COMMERCE PLATFORM',
        subtitle: 'React • Node.js • PostgreSQL',
        screenshots: [
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Homepage',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Product+Listing',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Shopping+Cart',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Admin+Dashboard'
        ],
        overview: 'A comprehensive full-stack e-commerce solution designed to handle high-traffic shopping experiences. Features include real-time inventory tracking, secure payment processing, advanced search and filtering, and a powerful admin dashboard for managing products, orders, and customers.',
        challenge: 'The main challenge was building a system that could handle thousands of concurrent users during peak shopping periods (Black Friday, holiday seasons) while maintaining sub-second response times. The platform also needed to integrate with multiple payment providers and shipping APIs while ensuring data consistency across distributed systems.',
        solution: 'Implemented a microservices architecture with Redis caching layer for frequently accessed data. Used React with server-side rendering for fast initial page loads and optimized SEO. Built a custom inventory management system with real-time updates using WebSockets. Integrated Stripe and PayPal for payments with robust error handling and retry mechanisms.',
        results: [
            '✓ Handles 10,000+ concurrent users with 99.9% uptime',
            '✓ Average page load time under 1.2 seconds',
            '✓ Reduced cart abandonment rate by 35%',
            '✓ Processed $2M+ in transactions in first quarter',
            '✓ 60% faster checkout process compared to previous system'
        ],
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/alexchen/ecommerce-platform'
    },
    automation: {
        icon: '🤖',
        title: 'TASK AUTOMATION TOOL',
        subtitle: 'Python • OpenAI API • Docker',
        screenshots: [
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=CLI+Interface',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Code+Generation',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Test+Generation',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=IDE+Integration'
        ],
        overview: 'An intelligent developer productivity tool that automates repetitive coding tasks using AI-powered code generation. The tool analyzes codebases, identifies patterns, and generates boilerplate code, tests, and documentation automatically. Designed to integrate seamlessly into existing development workflows.',
        challenge: 'Developers spend significant time on repetitive tasks like writing boilerplate code, creating unit tests, and updating documentation. The challenge was building a tool that could understand project context, maintain code consistency, and generate high-quality code that actually works without extensive manual editing.',
        solution: 'Built a Python-based CLI tool that uses OpenAI GPT-4 API for code generation. Implemented custom prompts optimized for different programming languages and frameworks. Created a Docker container for consistent execution across different development environments. Added template system for common patterns and integration with popular IDEs through extensions.',
        results: [
            '✓ Reduced boilerplate code writing time by 70%',
            '✓ Automatically generated 10,000+ unit tests with 85% success rate',
            '✓ Increased team productivity by 40%',
            '✓ Adopted by 500+ developers across the organization',
            '✓ Saved approximately 15 hours per developer per month'
        ],
        liveUrl: 'https://automation-tool-demo.com',
        githubUrl: 'https://github.com/alexchen/automation-tool'
    },
    analytics: {
        icon: '📊',
        title: 'REAL-TIME ANALYTICS DASHBOARD',
        subtitle: 'TypeScript • React • Redis',
        screenshots: [
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Main+Dashboard',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Real-time+Charts',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Custom+Filters',
            'https://via.placeholder.com/1200x675/0d0d0d/00ff88?text=Alert+System'
        ],
        overview: 'A powerful real-time analytics platform that processes and visualizes millions of events per day. Features interactive charts, custom dashboards, advanced filtering, and real-time alerts. Built for data-driven teams that need instant insights into their business metrics and user behavior.',
        challenge: 'Processing and visualizing millions of data points in real-time while maintaining a responsive user interface was extremely challenging. The system needed to handle sudden traffic spikes, provide sub-second query responses, and allow users to create custom dashboards without performance degradation.',
        solution: 'Implemented a streaming data pipeline using Redis Streams for real-time event processing. Built a React dashboard with virtualization for rendering large datasets efficiently. Used WebSockets for live updates and implemented smart caching strategies. Created a custom query builder that generates optimized SQL queries and leverages pre-aggregated data when possible.',
        results: [
            '✓ Processes 5M+ events per day with <100ms latency',
            '✓ Supports 1,000+ concurrent dashboard viewers',
            '✓ Query response time improved by 85%',
            '✓ Enabled data-driven decisions that increased revenue by 25%',
            '✓ Reduced infrastructure costs by 40% through optimizations'
        ],
        liveUrl: 'https://analytics-dashboard-demo.com',
        githubUrl: 'https://github.com/alexchen/analytics-dashboard'
    }
};

let currentImageIndex = 0;
let currentProjectScreenshots = [];

function openProjectModal(projectKey) {
    const modal = document.getElementById('project-modal');
    const project = projectData[projectKey];

    if (!project) return;

    // Populate modal content
    document.querySelector('.project-modal-icon').textContent = project.icon;
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-subtitle').textContent = project.subtitle;
    document.querySelector('.modal-overview').textContent = project.overview;
    document.querySelector('.modal-challenge').textContent = project.challenge;
    document.querySelector('.modal-solution').textContent = project.solution;

    // Populate results
    const resultsDiv = document.querySelector('.modal-results');
    resultsDiv.innerHTML = '<ul>' + project.results.map(result => `<li>${result}</li>`).join('') + '</ul>';

    // Update links
    document.querySelector('.modal-btn-primary').href = project.liveUrl;
    document.querySelector('.modal-btn-secondary').href = project.githubUrl;

    // Initialize gallery
    currentProjectScreenshots = project.screenshots || [];
    currentImageIndex = 0;
    initGallery();

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initGallery() {
    const galleryImagesContainer = document.querySelector('.gallery-images');
    const galleryDotsContainer = document.querySelector('.gallery-dots');

    // Clear existing content
    galleryImagesContainer.innerHTML = '';
    galleryDotsContainer.innerHTML = '';

    // Create images
    currentProjectScreenshots.forEach((screenshot, index) => {
        const img = document.createElement('img');
        img.src = screenshot;
        img.alt = `Project screenshot ${index + 1}`;
        img.className = 'gallery-image';
        if (index === 0) img.classList.add('active');
        galleryImagesContainer.appendChild(img);
    });

    // Create dots
    currentProjectScreenshots.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'gallery-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(index));
        galleryDotsContainer.appendChild(dot);
    });
}

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    const dots = document.querySelectorAll('.gallery-dot');

    // Remove active class from all
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current
    if (images[index]) images[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');

    currentImageIndex = index;
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % currentProjectScreenshots.length;
    showImage(nextIndex);
}

function prevImage() {
    const prevIndex = (currentImageIndex - 1 + currentProjectScreenshots.length) % currentProjectScreenshots.length;
    showImage(prevIndex);
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize project cards click handlers
window.addEventListener('load', () => {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('[data-project]');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectKey = card.getAttribute('data-project');
                openProjectModal(projectKey);
            });
        });

        // Close modal handlers
        const closeBtn = document.querySelector('.modal-close');
        const modal = document.getElementById('project-modal');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeProjectModal);
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeProjectModal();
                }
            });
        }

        // Gallery navigation handlers
        const prevBtn = document.querySelector('.gallery-prev');
        const nextBtn = document.querySelector('.gallery-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', prevImage);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', nextImage);
        }

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeProjectModal();
                } else if (e.key === 'ArrowLeft') {
                    prevImage();
                } else if (e.key === 'ArrowRight') {
                    nextImage();
                }
            }
        });
    }, 2500);
});

// ==================== ANIMATED STATS COUNTERS ====================
let statsAnimated = false;

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            // For large numbers, add commas
            const value = Math.floor(current);
            if (value >= 1000) {
                element.textContent = (value / 1000).toFixed(0) + 'K';
            } else {
                element.textContent = value;
            }
        }
    }, 16);
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            const statValues = document.querySelectorAll('.stat-value[data-count]');

            statValues.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== EMAILJS CONTACT FORM ====================
// Initialize EmailJS with your public key
// IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
    }
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.querySelector('#contact-form button[type="submit"]');
const submitText = document.getElementById('form-submit-text');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitText.textContent = '$ Sending...';
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';

        // Send email using EmailJS
        // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                // Show success message
                formStatus.textContent = '> Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';

                // Reset form
                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitText.textContent = '$ Send Message';
                    formStatus.style.display = 'none';
                }, 3000);
            }, function(error) {
                console.log('FAILED...', error);

                // Show error message
                formStatus.textContent = '> Error sending message. Please try again or email me directly.';
                formStatus.className = 'form-status error';

                // Reset button
                submitBtn.disabled = false;
                submitText.textContent = '$ Send Message';
            });
    });
}

// ==================== PROJECT FILTERING ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const techTags = document.querySelectorAll('.tech-tag');

// Filter button click handler
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('active');
            const cursor = b.querySelector('.filter-cursor');
            if (cursor) cursor.style.opacity = '0';
        });
        btn.classList.add('active');
        const cursor = btn.querySelector('.filter-cursor');
        if (cursor) cursor.style.opacity = '1';

        // Filter projects
        filterProjects(filter);
    });
});

// Tech tag click handler
techTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering project modal
        const tech = tag.getAttribute('data-tech');

        // Find and activate corresponding filter button
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${tech}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    });
});

// Filter function
function filterProjects(filter) {
    projectCards.forEach(card => {
        const tags = card.getAttribute('data-tags');

        if (filter === 'all') {
            // Show all projects
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.position = 'relative';
            }, 400);
        } else if (tags && tags.includes(filter)) {
            // Show matching projects
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.position = 'relative';
            }, 400);
        } else {
            // Hide non-matching projects
            card.classList.add('hidden');
            setTimeout(() => {
                card.style.position = 'absolute';
            }, 0);
        }
    });
}

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c> Page loaded in ${pageLoadTime}ms`, 'color: #0088ff; font-family: monospace;');
    });
}
