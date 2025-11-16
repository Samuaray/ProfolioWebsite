// Navigation card data - Each card represents a section
const cardsData = [
    {
        emoji: '🏠',
        title: 'Home',
        description: 'Welcome to my portfolio. Explore my work and get to know me.',
        badge: 'Start Here',
        section: 'home',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        emoji: '👨‍💻',
        title: 'About Me',
        description: 'Learn about my background, skills, and professional journey.',
        badge: 'Introduction',
        section: 'about',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        emoji: '💼',
        title: 'Projects',
        description: 'Explore my portfolio of web development and design projects.',
        badge: 'Portfolio',
        section: 'projects',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        emoji: '⚡',
        title: 'Skills',
        description: 'Technologies, tools, and frameworks I work with daily.',
        badge: 'Expertise',
        section: 'skills',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        emoji: '📬',
        title: 'Contact',
        description: 'Get in touch for collaborations, opportunities, or just to say hi.',
        badge: 'Connect',
        section: 'contact',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        emoji: '📄',
        title: 'Resume',
        description: 'Download my full CV and view my professional credentials.',
        badge: 'Documents',
        section: 'resume',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
];

let currentIndex = 0;
let rotation = 0; // Track total rotation
let isAnimating = false; // Prevent multiple clicks during animation
let isMinimized = false; // Track carousel state (full vs mini)
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Create cards
function createCards() {
    cardsData.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-inner" style="background: ${data.gradient}">
                <div class="card-image">${data.emoji}</div>
                <div class="card-content">
                    <div class="card-title">${data.title}</div>
                    <div class="card-description">${data.description}</div>
                    <div class="card-badge">${data.badge}</div>
                </div>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Position cards in 3D space - circular rotation around center axis
function updateCarousel() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Automatically calculate angle step to fill the circle evenly
    const angleStep = 360 / totalCards; // Divide full circle by number of cards

    // Calculate radius based on card width and angle to prevent overlap
    const cardWidth = 180;
    const angleRad = (angleStep * Math.PI) / 180;
    const radius = (cardWidth / 2) / Math.sin(angleRad / 2) + 100; // Add padding

    cards.forEach((card, index) => {
        // Calculate offset based on rotation instead of wrapping
        const rawOffset = index - rotation;

        // Normalize offset to always be within -totalCards/2 to +totalCards/2
        // This prevents cards from getting infinitely far away
        let offset = rawOffset % totalCards;
        if (offset > totalCards / 2) {
            offset -= totalCards;
        } else if (offset < -totalCards / 2) {
            offset += totalCards;
        }

        const absOffset = Math.abs(offset);

        // Remove center class from all cards
        card.classList.remove('center');

        // Calculate angle for circular positioning
        const angle = offset * angleStep;
        const angleRad = (angle * Math.PI) / 180;

        // Calculate position on the circle (only X-axis, no Z-depth)
        const x = Math.sin(angleRad) * radius;
        const y = -Math.cos(angleRad) * radius * 0.15; // Slight vertical offset for visual interest

        if (Math.abs(offset) < 0.01) {
            // Center card
            card.classList.add('center');
            card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotateY(${angle}deg) scale(1.15)`;
            card.style.opacity = '1';
            card.style.zIndex = '100';
        } else {
            // Side cards - positioned around the circle
            const scale = Math.max(0.6, 1 - absOffset * 0.15);
            const opacity = Math.max(0.3, 1 - absOffset * 0.25);

            card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotateY(${angle}deg) scale(${scale})`;
            card.style.opacity = opacity;
            // Z-index based on how close to center, not depth
            card.style.zIndex = Math.round(100 - absOffset * 10);
        }
    });

    // Update details panel with the card at center
    const centerCardIndex = ((Math.round(rotation) % cardsData.length) + cardsData.length) % cardsData.length;
    updateDetailsPanelWithIndex(centerCardIndex);
}

// Update the details panel with current card info
function updateDetailsPanel() {
    const currentCard = cardsData[currentIndex];
    document.getElementById('detailsIcon').textContent = currentCard.emoji;
    document.getElementById('detailsIcon').style.background = currentCard.gradient;
    document.getElementById('detailsTitle').textContent = currentCard.title;
    document.getElementById('detailsBadge').textContent = currentCard.badge;
    document.getElementById('detailsDescription').textContent = currentCard.description;
}

// Update details panel by index
function updateDetailsPanelWithIndex(index) {
    const currentCard = cardsData[index];
    document.getElementById('detailsIcon').textContent = currentCard.emoji;
    document.getElementById('detailsIcon').style.background = currentCard.gradient;
    document.getElementById('detailsTitle').textContent = currentCard.title;
    document.getElementById('detailsBadge').textContent = currentCard.badge;
    document.getElementById('detailsDescription').textContent = currentCard.description;
}

// Navigation functions
function nextCard() {
    if (isAnimating) return; // Prevent clicks during animation
    isAnimating = true;

    rotation++;
    currentIndex = (currentIndex + 1) % cardsData.length;
    updateCarousel();

    // Reset animation lock after transition completes
    setTimeout(() => {
        isAnimating = false;
    }, 800); // Match the CSS transition duration
}

function prevCard() {
    if (isAnimating) return; // Prevent clicks during animation
    isAnimating = true;

    rotation--;
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
    updateCarousel();

    // Reset animation lock after transition completes
    setTimeout(() => {
        isAnimating = false;
    }, 800); // Match the CSS transition duration
}

// Event listeners
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (isAnimating) return; // Prevent rapid key presses
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
});

// Click on card to make it center
carousel.addEventListener('click', (e) => {
    if (isAnimating) return; // Prevent clicks during animation

    const card = e.target.closest('.card');
    if (card) {
        const cards = Array.from(document.querySelectorAll('.card'));
        const clickedIndex = cards.indexOf(card);
        if (clickedIndex !== -1) {
            isAnimating = true;

            // Calculate shortest path to clicked card
            const totalCards = cardsData.length;
            const currentCenterIndex = ((Math.round(rotation) % totalCards) + totalCards) % totalCards;
            let diff = clickedIndex - currentCenterIndex;

            // Normalize the difference to find shortest path
            if (diff > totalCards / 2) {
                diff -= totalCards;
            } else if (diff < -totalCards / 2) {
                diff += totalCards;
            }

            rotation += diff;
            currentIndex = clickedIndex;
            updateCarousel();

            // Reset animation lock after transition completes
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }
    }
});

// Create particle effects
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Auto-rotate carousel (optional)
let autoRotate = setInterval(nextCard, 5000);

// Pause auto-rotate on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
});

carousel.addEventListener('mouseleave', () => {
    autoRotate = setInterval(nextCard, 5000);
});

// Handle section navigation - Transform carousel to mini mode
function navigateToSection(sectionId) {
    if (isAnimating) return;
    isAnimating = true;

    // Add minimized class to trigger CSS transformation
    const container = document.querySelector('.container');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const detailsPanel = document.querySelector('.details-panel');
    const mainTitle = document.querySelector('h1');

    container.classList.add('minimized');
    carouselWrapper.classList.add('mini');
    detailsPanel.classList.add('hidden');
    if (mainTitle) mainTitle.classList.add('hidden');

    // Stop auto-rotation in mini mode
    clearInterval(autoRotate);

    // Show the selected section content
    showSection(sectionId);

    isMinimized = true;

    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

// Show selected section content
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Return to home/full carousel view
function returnToHome() {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.querySelector('.container');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const detailsPanel = document.querySelector('.details-panel');
    const mainTitle = document.querySelector('h1');

    // Remove minimized classes
    container.classList.remove('minimized');
    carouselWrapper.classList.remove('mini');
    detailsPanel.classList.remove('hidden');
    if (mainTitle) mainTitle.classList.remove('hidden');

    // Hide all section content
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => section.classList.remove('active'));

    // Restart auto-rotation
    autoRotate = setInterval(nextCard, 5000);

    isMinimized = false;

    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

// Initialize
createCards();
createParticles();
updateCarousel();

// Add click handler for the action button
document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', () => {
            const currentSection = cardsData[currentIndex].section;
            if (currentSection === 'home') {
                // Already on home, do nothing
                return;
            }
            navigateToSection(currentSection);
        });
    }
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextCard();
    }
    if (touchEndX > touchStartX + 50) {
        prevCard();
    }
}
