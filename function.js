/**
 * ZACHARY GEORGE FONTAINE - DIGITAL RESUME CORE
 * Script: Waving Flag Text Engine
 * Purpose: Applies a dynamic sine wave to the brand header for a "Code Artist" aesthetic.
 */

const initWaveAnimation = () => {
    const nameElement = document.getElementById('wave-name');
    
    // Safety check to ensure the architect-card/header exists before running
    if (!nameElement) return;

    const text = nameElement.innerText;
    nameElement.innerHTML = '';

    // Step 1: Deconstruct the string into individual spans
    // This allows us to manipulate each "structural component" (letter) independently
    [...text].forEach(char => {
        const span = document.createElement('span');
        // If the character is a space, use a non-breaking space entity
        span.innerText = char === ' ' ? '\u00A0' : char; 
        nameElement.appendChild(span);
    });

    const letters = nameElement.querySelectorAll('span');
    let frame = 0;

    /**
     * Animation Loop
     * Uses requestAnimationFrame for top-of-the-line performance (60fps)
     */
    function animate() {
        frame += 0.04; // Adjust this value to change the "wind speed"

        letters.forEach((letter, i) => {
            /**
             * Sine Wave Logic:
             * Math.sin(frame + offset) creates the vertical wave.
             * Math.cos(frame + offset) creates a subtle horizontal "fabric stretch" tilt.
             */
            const y = Math.sin(frame + i * 0.2) * 8; 
            const tilt = Math.cos(frame + i * 0.2) * 4;
            
            // Apply the transformation to the letter's blueprint
            letter.style.transform = `translateY(${y}px) rotate(${tilt}deg)`;
        });

        // Recursively call the next frame
        requestAnimationFrame(animate);
    }

    // Start the engine
    animate();
};

// Initialize when the DOM is fully loaded and secure
document.addEventListener('DOMContentLoaded', initWaveAnimation);