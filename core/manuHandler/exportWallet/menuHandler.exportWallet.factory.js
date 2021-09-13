const fs = require("fs")

module.exports = dependencies => (filePath) => {
    
    let masterKeyOnFsRaw = fs.readFileSync(__dirname + "/../../storage/master-key.json");
    let walletOnFsRaw = fs.readFileSync(__dirname + "/../../storage/wallet.json");

    let backup = {};
    backup.masterKey = JSON.parse(masterKeyOnFsRaw);
    backup.wallet = JSON.parse(walletOnFsRaw);

    fs.writeFileSync(filePath + ".json", JSON.stringify(backup));
}