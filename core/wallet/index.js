const {ipcMain} = require("electron");
const deleteWalletItem = require("./deleteWalletItem/index.js");
const getWalletItems = require("./getWalletItems/index.js");
const getWalletItemById = require("./getWalletItemById/index.js");
const addOrUpdateWalletItem = require("./addOrUpdateWalletItem/index.js");
const persistence = require("../persistence/index.js");

const handlerMap = new Map([
    ["wallet_items", getWalletItems],
    ["wallet_items_by_id", getWalletItemById],
    ["delete_item", deleteWalletItem],
    ["add_or_update_item", addOrUpdateWalletItem]
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

wallet.persist = () => {
    persistence.storeItems();
}

module.exports = wallet;