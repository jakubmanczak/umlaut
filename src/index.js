const { app, Tray, Menu, BrowserWindow, globalShortcut } = require('electron');
const { captureRejectionSymbol } = require('events');
const path = require('path');
let appIcon;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const binds = [
  {
    stroke: 'Alt+a',
    insert: 'ä',
  },
  {
    stroke: 'Alt+o',
    insert: 'ö',
  },
];

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 350, // 350 // 750
    height: 240, // 315 // 750
    frame: false,
    resizable: false,
    title: 'umlaut',
    icon: './umlaut.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  // mainWindow.setAlwaysOnTop(true);
  appIcon = new Tray('./umlaut.ico');
  appIcon.setToolTip('umlaut');
  let contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: function () {
        mainWindow.show();
      },
    },
    {
      label: 'Quit',
      click: function () {
        app.isQuiting = true;
        app.quit();
      },
    },
  ]);
  appIcon.setContextMenu(contextMenu);

  appIcon.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });

  binds.map((bind) => {
    globalShortcut.register(bind.stroke, () => {
      console.log(bind.insert);
    });
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
