const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const careerButtons = document.querySelectorAll('.career-button');
    const careerFeedback = document.getElementById('career-feedback');
    const proceedButton = document.getElementById('proceed-button');

    let selectedCareer = '';

    // Handle career selection
    careerButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            selectedCareer = e.target.getAttribute('data-career');
            console.log(`Selected Career: ${selectedCareer}`); // Debugging

            careerFeedback.textContent = `You chose: ${selectedCareer}`;
            careerFeedback.style.color = '#007bff';

            // Show the proceed button
            proceedButton.style.display = 'inline-block';
        });
    });

    // Handle proceed to the next phase
    proceedButton.addEventListener('click', () => {
        console.log('Proceed button clicked'); // Debugging
        console.log(`Career Selected: ${selectedCareer}`); // Debugging

        let nextPhase = '';

        switch (selectedCareer) {
            case 'University':
                nextPhase = 'university.html';
                break;
            case 'Trade':
                nextPhase = 'trade.html';
                break;
            case 'Entrepreneur':
                nextPhase = 'entrepreneur.html';
                break;
            case 'Sports Scholarship':
                nextPhase = 'sports.html';
                break;
            case 'Creative':
                nextPhase = 'creative.html';
                break;
            default:
                console.error('No valid career selected!');
                return; // Exit if no valid career
        }

        ipcRenderer.send('open-window', nextPhase);
    });
});
