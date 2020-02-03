const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// Listen for app to be ready

app.on("ready", function() {
  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  });
  // Load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  // Quit app when closed
  mainWindow.on("closed", function() {
    app.quit();
  });

  mainWindow.setMenu(null);
});
