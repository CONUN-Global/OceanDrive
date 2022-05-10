import electron from 'electron';

export const isWindows = () => process.platform === 'win32';

export function isDevelopment() {
  if (typeof electron === 'string') {
    throw new TypeError('Not running in an Electron environment!');
  }

  const app = electron.app || electron.remote.app;

  const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
  const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

  return isEnvSet ? getFromEnv : !app.isPackaged;
}

export const isMasBuild = () => process.mas === true;
