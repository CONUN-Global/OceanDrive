const { app, ipcMain } = require('electron');
const { getIpfsNode } = require('../ipfs');
const fs = require('fs');

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

ipcMain.handle('upload-file', async (info) => {
  try {
    const node = getIpfsNode();

    const handleProgress = (data) => {
      const currentPercentage = ((data * 100) / info?.size).toFixed(2);

      mainWindow.webContents.send('upload-percentage', currentPercentage);
    };

    const file = fs.readFileSync(info.filePath);
    const fileContent = Buffer.from(file);

    const { cid } = await node.add(
      {
        content: fileContent
      },
      {
        progress: handleProgress
      }
    );

    return {
      data: cid,
      success: true
    };
  } catch (error) {
    console.log('upload-file', error, 'error');
    return {
      data: null,
      success: false
    };
  }
});
