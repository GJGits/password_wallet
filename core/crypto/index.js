const encrypt = require("./encrypt/index.js");
const decrypt = require("./decrypt/index.js");
const hash = require("./hash/index.js");
var crypto = {};

crypto.encrypt = (text, masterKey) => {
    return encrypt(text, masterKey);
}

crypto.decrypt = (hash, masterKey) => {
    return decrypt(hash, masterKey);
}

crypto.hash = (salt, text) => {
    return hash(salt, text);
}

module.exports = crypto;