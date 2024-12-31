const { ipcRenderer } = require('electron');
const eventDescription = document.getElementById('event-description');
const nextButton = document.getElementById('next-button');

// Event data placeholder
const events = [
    "You tried out for the football team.",
    "You entered the school science fair.",
    "You organized a talent show."
];

let currentEventIndex = 0;

// Initialize the first event
eventDescription.textContent = events[currentEventIndex];

// Handle the next button click
nextButton.addEventListener('click', () => {
    currentEventIndex++;
    if (currentEventIndex < events.length) {
        // Update the event description
        eventDescription.textContent = events[currentEventIndex];

        // Update button text for the last event
        if (currentEventIndex === events.length - 1) {
            nextButton.textContent = "End Childhood";
        }
    } else {
        // Send a message to open the career selection window
        ipcRenderer.send('open-window', 'career.html');
    }
});