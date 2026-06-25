```javascript
document.addEventListener('DOMContentLoaded', () => {

    // 1. Custom Structural Cursor Tracking System
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        // Hover expansions tracking configurations
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .story-card, .form-input');
        interactiveElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.style.width = '60px';
                cursor.style.height = '60px';
                cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.05)';
            });
            elem.addEventListener('mouseleave', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }

    // 2. Linear Scroll Progress Indicator Computations
    window.addEventListener('scroll',
