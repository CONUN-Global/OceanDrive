import { logger } from './logger';

const fs = require('fs');

const webPreferences = {
  nodeIntegration: false,
  enableRemoteModule: true,
};

export function getBounds(path) {
  let bounds = {
    width: 1000,
    height: 600,
    webPreferences,
    title: 'Inbox',
  };
  try {
    bounds = { ...bounds, ...JSON.parse(fs.readFileSync(path, 'utf8')) };
  } catch (e) {
    logger(e, 'error');
  }

  return bounds;
}

export function setBounds(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

export function getBoundsByState(states) {
  return {
    width: (states.bounds && states.bounds.width) || 1000,
    height: (states.bounds && states.bounds.height) || 600,
    webPreferences,
    title: 'Inbox',
    autoHideMenuBar: true,
  };
}

export function quitWindow(win) {
  if (win && !win.isDestroyed()) {
    win.hide();
  }
}
