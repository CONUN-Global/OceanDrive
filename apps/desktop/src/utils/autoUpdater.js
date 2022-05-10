import { autoUpdater } from 'electron-updater';
import { isDevelopment } from '.';
import { logger } from './logger';

const networkErrors = [
  'net::ERR_INTERNET_DISCONNECTED',
  'net::ERR_CONNECTION_RESET',
  'net::ERR_CONNECTION_CLOSE',
  'net::ERR_NAME_NOT_RESOLVED',
  'net::ERR_CONNECTION_TIMED_OUT'
];

function isNetworkError(errorObject) {
  return networkErrors.includes(errorObject.message);
}

export const checkForUpdates = () => {
  try {
    if (!isDevelopment()) {
      autoUpdater.checkForUpdatesAndNotify();
      return setInterval(() => {
        autoUpdater.checkForUpdatesAndNotify();
      }, 1000 * 60 * 60 * 24);
    }
  } catch (err) {
    if (!isNetworkError(err)) {
      logger(err, 'error');
    }
  }
  return null;
};
