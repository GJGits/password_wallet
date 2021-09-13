const importWallet = require("./importWallet/index.js");
const exportWallet = require("./exportWallet/index.js");

var menuHandler = {};

menuHandler.importWallet = (filePath) => {
    return importWallet(filePath);
}

menuHandler.exportWallet = (filePath) => {
    exportWallet(filePath);
}

module.exports = menuHandler;