const fs = require("fs");

module.exports = dependencies => (walletItems, masterKey) => {

    const { crypto } = dependencies;

    let walletItemsDeepCopy = JSON.parse(JSON.stringify(walletItems));

    walletItemsDeepCopy.forEach((element) => {
        element.secrets.map((secret) => {
            let cipher = crypto.encrypt(secret.value, masterKey);
            secret.value = cipher;
            return secret;
        });
    });
    fs.writeFileSync(__dirname + "/../../storage/wallet.json", JSON.stringify(walletItemsDeepCopy));
}