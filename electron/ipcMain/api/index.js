const { app, ipcMain } = require('electron');
const { getIpfsNode } = require('../ipfs');
const { concat } = require('uint8arrays');
const all = require('it-all');

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

ipcMain.handle('upload-file', async (_, info) => {
  try {
    const { node } = await getIpfsNode();
    const fileContent = Buffer.from(info);

    const response = await node.add({
      content: fileContent
    });

    return {
      data: response,
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

ipcMain.handle('upload-thumb', async (_, info) => {
  try {
    const { node } = await getIpfsNode();
    console.log(info);

    const response = await node.add({
      content: info.src
    });

    return {
      data: response,
      success: true
    };
  } catch (error) {
    console.log('upload-thumb', error, 'error');
    return {
      data: null,
      success: false
    };
  }
});

ipcMain.handle('get-thumb', async (_, hash) => {
  try {
    const { node } = await getIpfsNode();
    const decoder = new TextDecoder();
    let data = '';

    for await (const chunk of node.cat(hash)) {
      // chunks of data are returned as a Uint8Array, convert it back to a string
      data += decoder.decode(chunk, { stream: true });
    }
    return {
      success: true,
      data
    };
  } catch (error) {
    console.log('get-file-preview', error?.message, 'error');
    return {
      success: false,
      error: String(error)
    };
  }
});

ipcMain.handle('get-file-preview', async (_, hash) => {
  try {
    const { node } = await getIpfsNode();
    const preview = concat(await all(node.cat(hash)));

    return {
      success: true,
      data: preview
    };
  } catch (error) {
    console.log('get-file-preview', error?.message, 'error');
    return {
      success: false,
      error: String(error)
    };
  }
});
