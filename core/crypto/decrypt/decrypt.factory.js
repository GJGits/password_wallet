const crypto = require("crypto");

module.exports = dependencies => (hash, masterKey) => {
    let algorithm = 'aes-256-ctr';
    let secretKey = masterKey.key;
    let decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    let decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrypted.toString();
}