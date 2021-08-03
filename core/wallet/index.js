const {ipcMain} = require("electron");
const deleteWalletItem = require("./deleteWalletItem/index.js");
const getWalletItems = require("./getWalletItems/index.js");
const getWalletItemById = require("./getWalletItemById/index.js");
const addWalletItem = require("./addWalletItem/index.js");

const handlerMap = new Map([
    ["wallet_items", getWalletItems],
    ["wallet_items_by_id", getWalletItemById],
    ["delete_item", deleteWalletItem],
    ["add_item", addWalletItem]
]);

var wallet = {};

wallet.handle = function() {
    for (let [key, func] of handlerMap) {
        ipcMain.handle(key, func);
    }
}

wallet.stopHandle = function() {
    for (let [key, func] of handlerMap) {
        ipcMain.removeHandler(key);
    }
}

module.exports = wallet;