const fs = require("fs");

module.exports = dependencies => (key) => {
    const {crypto} = dependencies;
    let salt = Math.floor(Math.random() * 100) + 1;
    let hash = crypto.hash(salt, key.key);
    key.key = hash.content;
    key.salt = salt;
    fs.writeFileSync(__dirname + "/../../storage/master-key.json", JSON.stringify(key));
}