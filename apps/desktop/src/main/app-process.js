import { getAnalyticsId } from '../utils/analytics';
/* eslint-disable global-require */
const path = require('path');
const { shell, app, powerMonitor, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const { logger, eventLogger } = require('../utils/logger');
const { checkForUpdates } = require('../utils/autoUpdater');
const { isDevelopment, isMasBuild, isWindows } = require('../utils');

const externalUrls = [
];

function createAppWindow(win) {
  logger('App process is launched');
  if (isWindows()) {
    // remove window animation to prevent double flash until it is fixed in electron
    // (reference: https://github.com/electron/electron/issues/12130)
    app.commandLine.appendSwitch('wm-window-animations-disabled');
  }
  if (isDevelopment()) {
    win.openDevTools({ mode: 'detach' });
    // eslint-disable-next-line import/no-extraneous-dependencies
    const {
      default: installExtension,
      REDUX_DEVTOOLS
    } = require('electron-devtools-installer');
    installExtension(REDUX_DEVTOOLS, {
      loadExtensionOptions: { allowFileAccess: true },
      forceDownload: false
    })
      .catch((err) => console.log('installExtension', err))
      .finally(() => {});
  }


  const htmlFilePath = `file://${path.join(
    __dirname,
    '../../build/web/index.html'
  )}`;
  const APP_URL = isDevelopment() ? 'http://localhost:3000' : htmlFilePath;

  win.loadURL(APP_URL);
  app.on('second-instance', (e) => {
    e.preventDefault();
    eventLogger('renderer', 'second-instance');
    if (win) {
      if (win.isMinimized()) {
        win.restore();
      }
      win.focus();
    }
  });

  let intervalId = checkForUpdates();

  powerMonitor.on('suspend', () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  powerMonitor.on('resume', () => {
    intervalId = checkForUpdates();
  });

  ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
    event.returnValue = app.getVersion();
  });

  ipcMain.on('get-cid', (event) => {
    event.returnValue = getAnalyticsId();
  });

  autoUpdater.on('update-downloaded', () => {
    win?.webContents.send('update_downloaded');
  });

  autoUpdater.on('before-quit-for-update', () => {
    win.removeAllListeners('close');
    app.removeAllListeners('before-quit');
    app.removeAllListeners('window-all-closed');
  });

  ipcMain.on('restart', () => {
    if (!isWindows()) {
      autoUpdater.quitAndInstall(true, true);
      app.exit();
    } else {
      autoUpdater.quitAndInstall(true, true);
    }
  });
}

module.exports = {
  createAppWindow
};
