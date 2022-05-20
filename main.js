'use strict';

const { app, BrowserWindow } = require('electron');
const { Web3Storage } = require('@conun-global/web3.storage');
const path = require('path');

async function executeWeb3Storage() {
  try {
    const storage = new Web3Storage();
    await storage.startUp();
    return storage;
  } catch (error) {
    console.log('error: ', error);
  }
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  mainWindow.loadFile(path.join(__dirname, './dist/index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', async () => {
  createWindow();

  try {
    const node = await executeWeb3Storage();
    console.log(node);
  } catch (err) {
    console.error(err);
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
