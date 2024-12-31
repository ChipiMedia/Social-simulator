const gameState = require('./gameState');

// Debugging: Check the global state
console.log('Loaded Game State:', gameState);

// Add Logic for selecting a trade
tradeButtons = document.querySelectorAll('trade=button');

tradeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedTrade = e.target.getAttribute('data-trade');
        console.log(`Trade Selected: ${selectedTrade}`);
        // Add Logic to proceed or update game state
    });
});