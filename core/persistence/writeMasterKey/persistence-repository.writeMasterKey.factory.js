const fs = require("fs");

module.exports = dependencies => (masterKey) => {
    const {crypto} = dependencies;
    let salt = Math.floor(Math.random() * 100) + 1;
    let hashRead = crypto.hash(salt, masterKey.readKey.key);
    let hashWrite = crypto.hash(salt, masterKey.writeKey.key);
    masterKey.readKey.key = hashRead.content;
    masterKey.readKey.salt = salt;
    masterKey.writeKey.key = hashWrite.content;
    masterKey.writeKey.salt = salt;
    fs.writeFileSync(__dirname + "/../../storage/master-key.json", JSON.stringify(masterKey));
}