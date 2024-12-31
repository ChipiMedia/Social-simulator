const gameState = require('./gameState');

// Debugging: Check the global state
console.log('Loaded Game State:', gameState);

// Add Logic for selecting a major
const majorButtons = document.querySelectorAll('.major-button');

majorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedMajor = e.target.getAttribute('data-major');
        console.log(`Major Selected: ${selectedMajor}`);
        // Add Logic to proceed or update game state
    });
});