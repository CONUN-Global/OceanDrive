import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  //Listeners:
  listenToDeepLink: (fn: any) => {
    ipcRenderer.on("send-share-link", (e, ...args) => fn(...args));
  },
  listenToDownloadProgress: (fn: any) => {
    ipcRenderer.on("download-percentage", (e, ...args) => fn(...args));
  },
  listenToDownloadStart: (fn: any) => {
    ipcRenderer.on("download-start", (e, ...args) => fn(...args));
  },
  listenToDownloadSuccess: (fn: any) => {
    ipcRenderer.on("download-success", (e, ...args) => fn(...args));
  },
  listenToError: (fn: any) => {
    ipcRenderer.on("error-listener", (e, ...args) => fn(...args));
  },
  listenToFileRegister: (fn: any) => {
    ipcRenderer.on("is-registering-file", (e, ...args) => fn(...args));
  },
  listenToIsManagerConnected: (fn: any) => {
    ipcRenderer.on("is-manager-connected", (e, ...args) => fn(...args));
  },
  listenToUploadSuccess: (fn: any) => {
    ipcRenderer.on("upload-success", (e, ...args) => fn(...args));
  },
  listenToUploadProgress: (fn: any) => {
    ipcRenderer.on("upload-percentage", (e, ...args) => fn(...args));
  },
  listenToUpdateManager: (fn: any) => {
    ipcRenderer.on("update-manager", (e, ...args) => fn(...args));
  },
  removeListeners: (name: string) => ipcRenderer.removeAllListeners(name),

  // Web API Calls:
  getCategories: () => ipcRenderer.invoke("get-categories"),
  getContentBy: (form: any) => ipcRenderer.invoke("get-content-by", form),
  getContentTypes: () => ipcRenderer.invoke("get-content-types"),
  getDownloads: (page: string) => ipcRenderer.invoke("get-downloads", page),
  getFile: (id: string) => ipcRenderer.invoke("get-file", id),
  getSimilarContent: (id: string) =>
    ipcRenderer.invoke("get-similar-content", id),
  getTagsAutocomplete: (value: string) =>
    ipcRenderer.invoke("get-tags-autocomplete", value),
  searchContent: (args: any) => ipcRenderer.invoke("search-content", args),
  searchContentAutocomplete: (input: string) =>
    ipcRenderer.invoke("search-content-autocomplete", input),
  updateUser: (form: any) => ipcRenderer.invoke("update-user", form),

  // IPFS-related
  downloadFile: (hash: string) => ipcRenderer.invoke("download-file", hash),
  getFileDescription: (hash: string) =>
    ipcRenderer.invoke("get-file-description", hash),
  getFilePreview: (hash: string) =>
    ipcRenderer.invoke("get-file-preview", hash),
  uploadFile: (info: any) => ipcRenderer.invoke("upload-file", info),
  uploadAvatar: (path: string) => ipcRenderer.invoke("upload-avatar", path),
  getPeers: () => ipcRenderer.invoke("get-peers"),

  // Manager
  connectToManager: () => ipcRenderer.invoke("connect-to-manager"),
  likeContent: (args: any) => ipcRenderer.invoke("like-content", args),

  // App/Local machine
  createQRCode: (args: any) => ipcRenderer.invoke("create-qr-code", args),
  getAppVersion: () => ipcRenderer.invoke("get-app-version"),
  getShareLink: () => ipcRenderer.invoke("get-share-link"),
  readQRCode: (args: any) => ipcRenderer.invoke("read-qr-code", args),
  openFile: (path: string) => ipcRenderer.invoke("open-file", path),

  // Local Pouch DB Calls:
  getCurrentUser: () => ipcRenderer.invoke("get-current-user"),
  getLaterList: () => ipcRenderer.invoke("get-later-list"),
  updateLaterList: (list: any) => ipcRenderer.invoke("update-later-list", list),
});
