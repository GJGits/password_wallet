const fs = require("fs");

module.exports = dependecies => (masterKey) => {
    const { crypto } = dependecies;
    let data = fs.readFileSync(__dirname + '/../../storage/wallet.json');
    data = JSON.parse(data);
    data.forEach((item) => {
        item.secrets.map((secret) => {
            let hashed_value = secret.value;
            let decipher = crypto.decrypt(hashed_value, masterKey);
            secret.value = decipher;
            return secret;
        });

    });
    console.log("decrypted items:", data);
    return data;
}