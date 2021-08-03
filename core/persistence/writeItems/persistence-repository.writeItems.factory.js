const fs = require("fs");

module.exports = dependencies => (walletItems, masterKey) => {
    // TODO: encrypt items with masterkey
    fs.writeFileSync(__dirname + "/../../storage/wallet.json", JSON.stringify(walletItems));
}