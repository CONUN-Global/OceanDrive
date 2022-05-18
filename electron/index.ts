import { app, BrowserWindow, Menu, nativeImage, shell, Tray } from "electron";
import isDev from "electron-is-dev";
import serve from "electron-serve";
import path from "path";
import { createIpfs } from "./ipfs";
// import { createIpfs } from "./ipfs";

const loadURL = serve({ directory: "dist/parcel-build" });

const PROTOCOL_PREFIX = "ocean-drive://";

const APP_HEIGHT = process.platform === "win32" ? 746 : 720;

export let mainWindow = null;

let tray = null;

function createTray() {
  const icon = path.join(__dirname, "/assets/icon.png");
  const trayicon = nativeImage.createFromPath(icon);
  tray = new Tray(trayicon.resize({ width: 24 }));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Open Drive",
      click: () => {
        /* eslint-disable */
        if (!mainWindow) {
          createWindow();
        } else {
          mainWindow.restore();
        }
      },
    },
    {
      label: "Quit",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.on("click", () => {
    /* eslint-disable */
    if (!mainWindow) {
      createWindow();
    } else {
      mainWindow.restore();
    }
  });

  tray.setContextMenu(contextMenu);
}

const createWindow = async () => {
  await createIpfs();

  // await executeWeb3Storage();

  try {
    if (!tray) {
      createTray();
    }

    mainWindow = new BrowserWindow({
      height: APP_HEIGHT,
      width: 1280,
      minHeight: APP_HEIGHT,
      minWidth: 1080,
      title: "Ocean Drive",
      webPreferences: {
        nodeIntegration: false,
        preload: path.resolve(__dirname, "preload.js"),
      },
    });

    mainWindow.removeMenu();

    if (isDev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
        /* eslint-disable @typescript-eslint/no-var-requires */
      } = require("electron-devtools-installer");
      await installExtension(REACT_DEVELOPER_TOOLS);
      await mainWindow.loadURL("http://localhost:1235");
      mainWindow.webContents.openDevTools({ mode: "detach" });
    } else {
      await loadURL(mainWindow);
    }

    if (process.platform !== "darwin") {
      if (
        process.argv.length > 1 &&
        process.argv[1].startsWith(PROTOCOL_PREFIX)
      ) {
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
  } catch (err) {
    console.log("app-init", err, "error");
  }

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
};

const singleInstanceLock = app.requestSingleInstanceLock();

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  mainWindow = null;
  if (process.platform === "darwin") {
    app.dock.hide();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.setAsDefaultProtocolClient("ocean-drive");

if (!singleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", (_, argv) => {
    if (!mainWindow) {
      createWindow();
    } else {
      mainWindow.restore();
    }
    console.log("Push to file:", `Instance lock triggered`, "info");
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
      } else if (process.platform == "linux") {
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
app.on("will-finish-launching", () => {
  app.on("open-url", (event, url) => {
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
app.on("open-url", (event, url) => {
  event.preventDefault();
  console.log("OPEN-URL:", url, "error");
  //
});

process.on("uncaughtException", (uncaughtException) => {
  console.log("uncaught-exception", uncaughtException, "error");
});
