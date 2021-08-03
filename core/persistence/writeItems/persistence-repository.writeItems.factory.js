const fs = require("fs");

module.exports = dependencies => (walletItems, masterKey) => {

    const {crypto} = dependencies;

    for (let element of walletItems) {
         element.secrets.map((secret) => {
            let cipher = crypto.encrypt(secret.value, masterKey);
            secret.value = cipher;
            return secret;
         });   
    }
    fs.writeFileSync(__dirname + "/../../storage/wallet.json", JSON.stringify(walletItems));
}