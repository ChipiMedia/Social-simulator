const { ipcRenderer } = require('electron');

const startButton = document.getElementById('start-button');

// Handle the Start Simulation button click
startButton.addEventListener('click', () => {
    // Send a message to the main process to open the childhood simulation window
    ipcRenderer.send('open-window', 'childhood.html');
});
