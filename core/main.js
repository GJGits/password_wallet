const { app, BrowserWindow, Menu, dialog } = require('electron')
const auth = require("./auth/index.js")
const wallet = require("./wallet/index.js")
const menuHandler = require("./manuHandler/index.js");

var menu = Menu.buildFromTemplate([
    {
        label: 'File',
        submenu: [
            {
                label: 'Import Wallet',
                accelerator: 'CmdOrCtrl+I',
                click() {
                    let filePath = dialog.showOpenDialogSync({ properties: ['openFile'], filters: [{ name: 'zip files', extensions: ['zip'] }] });
                    let result = menuHandler.importWallet(filePath);
                    if (!result) {
                        const options = {
                            type: 'error',
                            buttons: ['Ok'],
                            defaultId: 1,
                            title: 'Error',
                            message: 'The format of the wallet is not valid',
                            detail: 'Close this window and try to import another file',
                        };
                        dialog.showMessageBoxSync(null, options);
                    }
                    else {
                        app.quit();
                        app.relaunch()
                    }

                }
            },
            {
                label: 'Export Wallet',
                accelerator: 'CmdOrCtrl+E',
                click() {
                    let filePath = dialog.showSaveDialogSync({ options: { defaultPath: __dirname + "/backups/back.zip" } });
                    menuHandler.exportWallet(filePath);
                }
            },
        ]
    }
]);

Menu.setApplicationMenu(menu);

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
