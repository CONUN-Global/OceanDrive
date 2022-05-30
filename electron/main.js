'use strict';

const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const { initIpfs } = require('./ipcMain/ipfs');
const { isDevelopment } = require('./utils');

require('./ipcMain/api');

let mainWindow,
  tray = null;

function createTray() {
  console.log('creating tray');
  const icon = path.join(__dirname, './assets/icon.png');
  const trayicon = nativeImage.createFromPath(icon);
  tray = new Tray(trayicon.resize({ width: 16 }));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open Drive',
      click: () => {
        /* eslint-disable */
        if (!mainWindow) {
          createWindow();
        } else {
          mainWindow.restore();
        }
      }
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      }
    }
  ]);

  tray.on('click', () => {
    /* eslint-disable */
    if (!mainWindow) {
      createWindow();
    } else {
      mainWindow.restore();
    }
  });

  tray.setContextMenu(contextMenu);
  console.log('tray created');
}

function createWindow() {
  if (!tray) {
    createTray();
  }

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  const LOAD_URL = isDevelopment()
    ? 'http://localhost:3000'
    : path.join(__dirname, './dist/index.html');
  mainWindow.loadURL(LOAD_URL);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', async () => {
  createWindow();
  initIpfs();
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
