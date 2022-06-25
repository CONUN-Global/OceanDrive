'use strict';

const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const { initIpfs } = require('./ipcMain/ipfs');
const { isDevelopment } = require('./utils');
const serve = require('electron-serve');

require('./ipcMain/api');

let mainWindow,
  tray = null;

const loadURL = serve({ directory: 'build/web' });

function createTray() {
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
      webSecurity: false,
      nodeIntegration: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  // const htmlFilePath = `file://${path.join(
  //   __dirname,
  //   '../build/web/index.html'
  // )}`;
  // const LOAD_URL = isDevelopment() ? 'http://localhost:3000' : htmlFilePath;

  if (isDevelopment()) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    loadURL(mainWindow);
  }

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
