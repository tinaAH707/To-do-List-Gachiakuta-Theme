const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 410,
    resizable: true,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: false,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});