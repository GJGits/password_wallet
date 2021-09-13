const fs = require("fs");

module.exports = dependencies => (masterKey) => {
    const {crypto} = dependencies;
    let masterKeyCopy = JSON.parse(JSON.stringify(masterKey));
    let salt = Math.floor(Math.random() * 100) + 1;
    let hashRead = crypto.hash(salt, masterKeyCopy.readKey.key);
    let hashWrite = crypto.hash(salt, masterKeyCopy.writeKey.key);
    masterKeyCopy.readKey.key = hashRead.content;
    masterKeyCopy.readKey.salt = salt;
    masterKeyCopy.writeKey.key = hashWrite.content;
    masterKeyCopy.writeKey.salt = salt;
    fs.writeFileSync(__dirname + "/../../storage/master-key.json", JSON.stringify(masterKeyCopy));
}