# Portfolio Website - 3D Card Carousel

An interactive 3D card carousel built with vanilla HTML, CSS, and JavaScript. Features smooth animations, touch support, and responsive design.

## Features

- **3D Carousel Animation**: Smooth circular rotation with 8 interactive cards
- **Multiple Navigation Methods**:
  - Left/right arrow buttons
  - Keyboard arrow keys
  - Click any card to bring it to center
  - Touch/swipe gestures for mobile
- **Auto-rotation**: Cards automatically cycle every 5 seconds (pauses on hover)
- **Interactive Details Panel**: Dynamically updates to show the selected card's information
- **Visual Effects**:
  - Animated particle background
  - Glowing center card with pulsing animation
  - Gradient backgrounds for each card
  - Hover effects with shimmer animation
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices

## Project Structure

```
ProfolioWebsite/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── carousel.js     # Carousel logic and interactions
├── Draft.html          # Original single-file version (legacy)
└── README.md           # This file
```

## Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure vanilla JavaScript project.

### Running the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Samuaray/ProfolioWebsite.git
   cd ProfolioWebsite
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

## Customization

### Modifying Card Data

Edit the `cardsData` array in `js/carousel.js` to customize the cards:

```javascript
const cardsData = [
    {
        emoji: '🎨',
        title: 'Your Title',
        description: 'Your description text',
        badge: 'Your Badge',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    // Add more cards...
];
```

### Changing Colors

Modify the gradient backgrounds in `css/styles.css`:
- Body background: `.body` selector
- Card gradients: Defined in `cardsData` array
- Button colors: `.action-button` selector

### Adjusting Animation Speed

In `js/carousel.js`:
- Carousel rotation speed: Change `800` in `setTimeout()` calls
- Auto-rotation interval: Change `5000` in `setInterval(nextCard, 5000)`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Converting to a Portfolio

This carousel can be adapted for a portfolio website by:

1. **Replace card data** with your actual projects
2. **Add project details**:
   - Project name, description, tech stack
   - Links to GitHub repos and live demos
   - Screenshots or project thumbnails
3. **Add navigation** to other portfolio sections (About, Contact, Skills)
4. **Customize the details panel** to show project-specific information
5. **Add more pages** (about.html, contact.html, etc.)

## Technical Details

- **3D Transforms**: Uses CSS `perspective`, `transform-style: preserve-3d`, and `rotateY()`
- **Circular Layout**: Automatically calculates card positions using trigonometry
- **Smooth Transitions**: CSS `cubic-bezier` easing for natural motion
- **Touch Events**: Supports `touchstart` and `touchend` for mobile swipe gestures
- **Responsive Design**: CSS media queries for 1024px, 768px, and 480px breakpoints

## License

This project is open source and available for personal and commercial use.

## Author

Your Name - [GitHub](https://github.com/Samuaray)

## Acknowledgments

- Built with vanilla JavaScript (no frameworks)
- Inspired by modern UI/UX design patterns