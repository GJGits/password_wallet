const readItems = require("./readItems/index.js");
const writeItems = require("./writeItems/index.js");
const readMasterKey = require("./readMasterKey/index.js");
const writeMasterKey = require("./writeMasterKey/index.js");

var persistence = {};
var masterKey;
var walletItems = [];

persistence.getItems = () => {
    if (!walletItems.length) {
        walletItems = readItems(masterKey);
    }
    return walletItems;
};

persistence.getItemById = (id) => {
    return walletItems.find((el) => el.id === id);
}

persistence.addItem = (item) => {
    let index = walletItems.findIndex((el) => el.id === item.id);
    if (index === -1) {
        item.id = walletItems.length + 1;
        walletItems.push(item);
    } else {
        walletItems[index] = item;
    }

    writeItems(walletItems, masterKey);
};

persistence.deleteItem = (item) => {
    walletItems = walletItems.filter((el) => el.id !== item.id);
    writeItems(walletItems, masterKey);
}

persistence.loadMasterKey = () => {
    if (!masterKey) {
        masterKey = readMasterKey();
    }
    return masterKey;
}

persistence.storeMasterKey = (key) => {
    masterKey = key;
    writeMasterKey(key);
}

persistence.setVolatileClearPassword = (clearPassword) => {
    masterKey.key = clearPassword;
}

module.exports = persistence;