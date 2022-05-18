"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("api", {
    //Listeners:
    listenToDeepLink: function (fn) {
        electron_1.ipcRenderer.on("send-share-link", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToDownloadProgress: function (fn) {
        electron_1.ipcRenderer.on("download-percentage", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToDownloadStart: function (fn) {
        electron_1.ipcRenderer.on("download-start", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToDownloadSuccess: function (fn) {
        electron_1.ipcRenderer.on("download-success", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToError: function (fn) {
        electron_1.ipcRenderer.on("error-listener", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToFileRegister: function (fn) {
        electron_1.ipcRenderer.on("is-registering-file", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToIsManagerConnected: function (fn) {
        electron_1.ipcRenderer.on("is-manager-connected", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToUploadSuccess: function (fn) {
        electron_1.ipcRenderer.on("upload-success", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToUploadProgress: function (fn) {
        electron_1.ipcRenderer.on("upload-percentage", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    listenToUpdateManager: function (fn) {
        electron_1.ipcRenderer.on("update-manager", function (e) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return fn.apply(void 0, args);
        });
    },
    removeListeners: function (name) { return electron_1.ipcRenderer.removeAllListeners(name); },
    // Web API Calls:
    getCategories: function () { return electron_1.ipcRenderer.invoke("get-categories"); },
    getContentBy: function (form) { return electron_1.ipcRenderer.invoke("get-content-by", form); },
    getContentTypes: function () { return electron_1.ipcRenderer.invoke("get-content-types"); },
    getDownloads: function (page) { return electron_1.ipcRenderer.invoke("get-downloads", page); },
    getFile: function (id) { return electron_1.ipcRenderer.invoke("get-file", id); },
    getSimilarContent: function (id) {
        return electron_1.ipcRenderer.invoke("get-similar-content", id);
    },
    getTagsAutocomplete: function (value) {
        return electron_1.ipcRenderer.invoke("get-tags-autocomplete", value);
    },
    searchContent: function (args) { return electron_1.ipcRenderer.invoke("search-content", args); },
    searchContentAutocomplete: function (input) {
        return electron_1.ipcRenderer.invoke("search-content-autocomplete", input);
    },
    updateUser: function (form) { return electron_1.ipcRenderer.invoke("update-user", form); },
    // IPFS-related
    downloadFile: function (hash) { return electron_1.ipcRenderer.invoke("download-file", hash); },
    getFileDescription: function (hash) {
        return electron_1.ipcRenderer.invoke("get-file-description", hash);
    },
    getFilePreview: function (hash) {
        return electron_1.ipcRenderer.invoke("get-file-preview", hash);
    },
    uploadFile: function (info) { return electron_1.ipcRenderer.invoke("upload-file", info); },
    uploadAvatar: function (path) { return electron_1.ipcRenderer.invoke("upload-avatar", path); },
    getPeers: function () { return electron_1.ipcRenderer.invoke("get-peers"); },
    // Manager
    connectToManager: function () { return electron_1.ipcRenderer.invoke("connect-to-manager"); },
    likeContent: function (args) { return electron_1.ipcRenderer.invoke("like-content", args); },
    // App/Local machine
    createQRCode: function (args) { return electron_1.ipcRenderer.invoke("create-qr-code", args); },
    getAppVersion: function () { return electron_1.ipcRenderer.invoke("get-app-version"); },
    getShareLink: function () { return electron_1.ipcRenderer.invoke("get-share-link"); },
    readQRCode: function (args) { return electron_1.ipcRenderer.invoke("read-qr-code", args); },
    openFile: function (path) { return electron_1.ipcRenderer.invoke("open-file", path); },
    // Local Pouch DB Calls:
    getCurrentUser: function () { return electron_1.ipcRenderer.invoke("get-current-user"); },
    getLaterList: function () { return electron_1.ipcRenderer.invoke("get-later-list"); },
    updateLaterList: function (list) { return electron_1.ipcRenderer.invoke("update-later-list", list); }
});
//# sourceMappingURL=preload.js.map