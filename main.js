const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

// Function to create a new window
function openWindow(file) {
    const newWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    newWindow.loadFile(file).catch((err) => {
        console.error('Failed to load file: ${file}', err);
    });
}

// App lifecycle events
app.on('ready', () => {
    // Create and load the main welcome window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('welcome.html'); // Load the welcome screen
});

// Handle all windows being closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Handle app activation (macOS specific behavior)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        openWindow('index.html'); // Reopen the welcome screen
    }
});

// Listen for navigation requests from renderer processes
ipcMain.on('open-window', (event, file) => {
    console.log(`Request to open: ${file}`); // Debugging
    openWindow(file);
});