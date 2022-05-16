import { executeWeb3Storage } from '@ocean-drive/core';
import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron';
import { join } from 'path';
import { isDevelopment, isWindows } from './utils/index';
import { eventLogger, logger } from './utils/logger';
import { getBounds, quitWindow, setBounds } from './utils/state';

require('dotenv').config({
  path: isDevelopment() ? '.env.development.local' : '.env'
});

const { createAppWindow } = require('./main/app-process');

let tray;
let win;

export function destroyWindow() {
  if (!win) return;
  win.close();
  win = null;
}

function closeApp(browserWin, trayArg) {
  browserWin.close();
  browserWin.removeAllListeners();
  if (tray) {
    trayArg.destroy();
  }
  tray = null;
  app.quit();
}

function enableWindow(browserWin) {
  if (!app.dock.isVisible()) {
    app.dock.show();
  }
  return browserWin.show();
}

function createTray() {
  const icon = join(__dirname, '/../assets/images/favicon.png'); // required.
  const trayicon = nativeImage.createFromPath(icon);
  const initTray = new Tray(trayicon.resize({ width: 18 }));
  initTray.on('click', () => {
    initTray.popUpContextMenu();
  });

  return initTray;
}

async function showWindow() {
  // web3 connection
  executeWeb3Storage().then((res) => {
    console.log(res);
  });
  // web3 connection

  const initPath = join(app.getPath('userData'), 'init.json');

  win = new BrowserWindow({
    ...getBounds(initPath),
    frame: true,
    disableAutoHideCursor: false,
    title: 'Ocean Drive',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
  const contextMenu = Menu.buildFromTemplate([
    {
      label: `Version ${app.getVersion()}`,
      click: () => {},
      enabled: false
    },
    {
      label: 'Open Ocean Drive',
      click: () => {
        if (!win || isWindows()) {
          app.exit(0);
          app.relaunch();
        } else {
          enableWindow(win);
        }
      }
    },
    {
      label: 'Quit',
      click: () => closeApp(win, tray)
    }
  ]);

  if (!tray) {
    tray = createTray();
    tray.setContextMenu(contextMenu);
  }

  win?.setMenuBarVisibility(false);
  try {
    await createAppWindow(win);
  } catch (err) {
    console.log(err);
  }

  win.on('close', (e) => {
    e.preventDefault();
    eventLogger('app process', 'close');
    const writeData = {
      ...win.getBounds()
    };
    setBounds(writeData, initPath); // to store dimension
    quitWindow(win);
  });

  app.on('activate', (e) => {
    e.preventDefault();
    eventLogger('renderer', 'activate');
    if (win) {
      win.show();
    }
  });

  app.on('before-quit', () => {
    eventLogger('renderer', 'before-quit');
    app.dock.hide();
    win.close();
  });

  return null;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', showWindow);

// Quit when all windows are closed.
app.on('window-all-closed', (e) => {
  e.preventDefault();
  logger('window-all-closed event');
  app.dock.hide();
});
