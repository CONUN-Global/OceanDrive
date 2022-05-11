import { app } from 'electron';
import { resolve } from 'path';
import authService from '../services/auth-service';
import { isDevelopment } from '../utils';
import { eventLogger, logger } from '../utils/logger';
import { createAppWindow } from './app-process';

const PROTOCOL_PREFIX = 'inbox';

function createAuthWindow(win) {
  logger('Auth process launched');
  win.loadURL(authService.getAuthenticationURL());

  // Force single application instance
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
    return;
  }

  app.removeAsDefaultProtocolClient(PROTOCOL_PREFIX);

  // If we are running a non-packaged version of the app && on windows
  if (isDevelopment() && process.platform === 'win32') {
    // Set the path of electron.exe and your app.
    // These two additional parameters are only available on windows.
    app.setAsDefaultProtocolClient(PROTOCOL_PREFIX, process.execPath, [
      resolve(process.argv[1])
    ]);
  } else {
    app.setAsDefaultProtocolClient(PROTOCOL_PREFIX);
  }

  app.on('second-instance', async (e, argv) => {
    e.preventDefault();
    eventLogger('renderer', 'second-instance');
    if (process.platform !== 'darwin') {
      const url = argv.find((arg) => arg.includes(PROTOCOL_PREFIX));
      try {
        await authService.loadTokens(url);
        createAppWindow(win);
      } catch (err) {
        logger(err);
        throw err;
      }
    }
    return null;
  });

  app.on('open-url', async (event, url) => {
    event.preventDefault();
    eventLogger('renderer', `open-url -- ${url}`);
    try {
      await authService.loadTokens(url);
      createAppWindow(win);
    } catch (err) {
      logger(`In open-url: ${err}`, 'error');
      createAuthWindow(win);
    }
  });
}

module.exports = {
  createAuthWindow
};
