const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  //Listeners:
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  uploadFile: (info) => ipcRenderer.invoke('upload-file', info)
});
