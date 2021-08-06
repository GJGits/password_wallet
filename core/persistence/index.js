const readItems = require("./readItems/index.js");
const writeItems = require("./writeItems/index.js");
const readMasterKey = require("./readMasterKey/index.js");
const writeMasterKey = require("./writeMasterKey/index.js");

var persistence = {};
var masterKey;
var walletItems = [];

persistence.getItems = () => {
    if (!walletItems.length) {
        walletItems = readItems(masterKey.readKey);
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
};

persistence.deleteItem = (item) => {
    walletItems = walletItems.filter((el) => el.id !== item.id);
}

persistence.storeItems = () => {
    writeItems(walletItems, masterKey.writeKey);
}

persistence.loadMasterKey = () => {
    if (!masterKey) {
        masterKey = readMasterKey();
        if (masterKey.readKey.lastUpdate !== masterKey.writeKey.lastUpdate) {
            masterKey.readKey = JSON.parse(JSON.stringify(masterKey.writeKey));
        }
    }
    return masterKey;
}

persistence.setPlainTextPassword = (plainTextPassword) => {
    masterKey.readKey.key = plainTextPassword;
    masterKey.writeKey.key = plainTextPassword;
}

persistence.setWriteKey = (writeKey) => {
    masterKey.writeKey = JSON.parse(JSON.stringify(writeKey));
    writeMasterKey(masterKey);
}

module.exports = persistence;