const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  //Listeners:
  getAppVersion: () => ipcRenderer.invoke('get-app-version')
});
