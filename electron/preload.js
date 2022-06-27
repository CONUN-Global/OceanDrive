const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  //Listeners:
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getFilePreview: (hash) => ipcRenderer.invoke('get-file-preview', hash),
  uploadFile: (info) => ipcRenderer.invoke('upload-file', info),
  getThumb: (hash) => ipcRenderer.invoke('get-thumb', hash),
  uploadThumb: (info) => ipcRenderer.invoke('upload-thumb', info)
});
