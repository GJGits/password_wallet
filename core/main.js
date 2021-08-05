const { app, BrowserWindow, Menu, dialog } = require('electron')
const auth = require("./auth/index.js")
const wallet = require("./wallet/index.js")
const menuHandler = require("./manuHandler/index.js");
const fs = require("fs");
var path = require("path");

var menu = Menu.buildFromTemplate([
    {
        label: 'File',
        submenu: [
            {
                label: 'Import Wallet',
                accelerator: 'CmdOrCtrl+I',
                click() {
                    let filePath = dialog.showOpenDialogSync({ properties: ['openFile'], filters: [{ name: 'json files', extensions: ['json'] }] });
                    if (filePath) {
                        filePath = filePath[0];
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
                            app.relaunch();
                            app.exit();
                        }

                    }

                }
            },
            {
                label: 'Export Wallet',
                accelerator: 'CmdOrCtrl+E',
                click() {
                    const today = new Date();
                    const options = { defaultPath: path.resolve("./backups") + "/backup_" + today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate(), filters: [{ name: "json", extensions: ["json"] }] };
                    let filePath = dialog.showSaveDialogSync(null, options);
                    if (filePath) {
                        menuHandler.exportWallet(filePath);
                    }

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

    // create resources if not present
    if (!fs.existsSync("./backups")) {
        fs.mkdirSync("./backups");
    }

    // register handlers
    auth.handle();
    wallet.handle();
    // finally create window
    createWindow();

})
