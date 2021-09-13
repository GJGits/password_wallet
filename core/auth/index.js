const accountExistsAndIsValid = require("./accountExistsAndIsValid/index.js");
const setNewCredentials = require("./setNewCredentials/index.js")
const signin = require("./signin/index.js")
const {ipcMain} = require("electron");

const handlerMap = new Map([
    ["accountExistsAndIsValid", accountExistsAndIsValid],
    ["setNewCredentials", setNewCredentials],
    ["signin", signin]
]);

var auth = {};

auth.handle = function() {
    for (let [key, func] of handlerMap) {
        ipcMain.handle(key, func);
    }
}

auth.stopHandle = function() {
    for (let [key, func] of handlerMap) {
        ipcMain.removeHandler(key);
    }
}

module.exports = auth;