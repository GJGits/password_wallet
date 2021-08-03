const { app, BrowserWindow, ipcMain } = require('electron')
const auth = require("./auth/index.js")
const wallet = require("./wallet/index.js")

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadFile(__dirname + '/../view/dist/view/index.html')
}


app.whenReady().then(() => {

    // register handlers
    auth.handle();
    wallet.handle();
    // finally create window
    createWindow();



})
