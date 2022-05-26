const { app, ipcMain } = require('electron');

ipcMain.handle('get-app-version', async () => {
  try {
    const version = app.getVersion();

    return version;
  } catch (error) {
    console.log('get-app-version', error, 'error');
    return {
      success: false,
      error
    };
  }
});
