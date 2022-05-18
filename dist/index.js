"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.mainWindow = void 0;
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var electron_serve_1 = __importDefault(require("electron-serve"));
var path_1 = __importDefault(require("path"));
var ipfs_1 = require("./ipfs");
// import { createIpfs } from "./ipfs";
var loadURL = (0, electron_serve_1["default"])({ directory: "dist/parcel-build" });
var PROTOCOL_PREFIX = "ocean-drive://";
var APP_HEIGHT = process.platform === "win32" ? 746 : 720;
exports.mainWindow = null;
var tray = null;
function createTray() {
    var icon = path_1["default"].join(__dirname, "/assets/icon.png");
    var trayicon = electron_1.nativeImage.createFromPath(icon);
    tray = new electron_1.Tray(trayicon.resize({ width: 24 }));
    var contextMenu = electron_1.Menu.buildFromTemplate([
        {
            label: "Open Drive",
            click: function () {
                /* eslint-disable */
                if (!exports.mainWindow) {
                    createWindow();
                }
                else {
                    exports.mainWindow.restore();
                }
            }
        },
        {
            label: "Quit",
            click: function () {
                electron_1.app.quit();
            }
        },
    ]);
    tray.on("click", function () {
        /* eslint-disable */
        if (!exports.mainWindow) {
            createWindow();
        }
        else {
            exports.mainWindow.restore();
        }
    });
    tray.setContextMenu(contextMenu);
}
var createWindow = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, installExtension, REACT_DEVELOPER_TOOLS, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, ipfs_1.createIpfs)()];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 8, , 9]);
                if (!tray) {
                    createTray();
                }
                exports.mainWindow = new electron_1.BrowserWindow({
                    height: APP_HEIGHT,
                    width: 1280,
                    minHeight: APP_HEIGHT,
                    minWidth: 1080,
                    title: "Ocean Drive",
                    webPreferences: {
                        nodeIntegration: false,
                        preload: path_1["default"].resolve(__dirname, "preload.js")
                    }
                });
                exports.mainWindow.removeMenu();
                if (!electron_is_dev_1["default"]) return [3 /*break*/, 5];
                _a = require("electron-devtools-installer"), installExtension = _a["default"], REACT_DEVELOPER_TOOLS = _a.REACT_DEVELOPER_TOOLS;
                return [4 /*yield*/, installExtension(REACT_DEVELOPER_TOOLS)];
            case 3:
                _b.sent();
                return [4 /*yield*/, exports.mainWindow.loadURL("http://localhost:1235")];
            case 4:
                _b.sent();
                exports.mainWindow.webContents.openDevTools({ mode: "detach" });
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, loadURL(exports.mainWindow)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                if (process.platform !== "darwin") {
                    if (process.argv.length > 1 &&
                        process.argv[1].startsWith(PROTOCOL_PREFIX)) {
                        // This line works for win and lin
                        // getURLFromArgv(process.argv[1]).then((url: string) => {
                        //   console.log("start-up-with-link", `Start up with link: ${url}`, "error");
                        //   if (url) {
                        //     mainWindow.webContents.send("send-share-link", {
                        //       targetLink: url,
                        //     });
                        //   }
                        // });
                    }
                }
                return [3 /*break*/, 9];
            case 8:
                err_1 = _b.sent();
                console.log("app-init", err_1, "error");
                return [3 /*break*/, 9];
            case 9:
                exports.mainWindow.webContents.on("new-window", function (event, url) {
                    event.preventDefault();
                    electron_1.shell.openExternal(url);
                });
                return [2 /*return*/];
        }
    });
}); };
var singleInstanceLock = electron_1.app.requestSingleInstanceLock();
electron_1.app.on("ready", function () {
    createWindow();
});
electron_1.app.on("window-all-closed", function () {
    exports.mainWindow = null;
    if (process.platform === "darwin") {
        electron_1.app.dock.hide();
    }
});
electron_1.app.on("activate", function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
electron_1.app.setAsDefaultProtocolClient("ocean-drive");
if (!singleInstanceLock) {
    electron_1.app.quit();
}
else {
    electron_1.app.on("second-instance", function (_, argv) {
        if (!exports.mainWindow) {
            createWindow();
        }
        else {
            exports.mainWindow.restore();
        }
        console.log("Push to file:", "Instance lock triggered", "info");
        if (argv.length > 1 && process.argv[1].startsWith(PROTOCOL_PREFIX)) {
            // Only try this if there is an argv (might be redundant)
            if (process.platform == "win32") {
                // getURLFromArgv(argv[argv.length - 1]).then((url: string) => {
                //   if (url) {
                //     mainWindow.webContents.send("send-share-link", {
                //       targetLink: url,
                //     });
                //   }
                // });
            }
            else if (process.platform == "linux") {
                // getURLFromArgv(argv[1]).then((url: string) => {
                //   if (url) {
                //     mainWindow.webContents.send("send-share-link", {
                //       targetLink: url,
                //     });
                //   }
                // });
            }
        }
    });
}
// For mac
electron_1.app.on("will-finish-launching", function () {
    electron_1.app.on("open-url", function (event, url) {
        event.preventDefault();
        console.log("OPEN-URL:", url, "error");
        // getURLFromArgv(url).then((url: string) => {
        //   if (url) {
        //     mainWindow.webContents.send("send-share-link", {
        //       targetLink: url,
        //     });
        //   }
        // });
    });
});
// for mac, when open already
electron_1.app.on("open-url", function (event, url) {
    event.preventDefault();
    console.log("OPEN-URL:", url, "error");
    //
});
process.on("uncaughtException", function (uncaughtException) {
    console.log("uncaught-exception", uncaughtException, "error");
});
//# sourceMappingURL=index.js.map