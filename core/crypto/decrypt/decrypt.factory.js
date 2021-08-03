const crypto = require("crypto");

module.exports = dependencies => (hash, masterKey) => {
    let algorithm = 'aes-256-ctr';
    let secretKey = "" + masterKey.iv + masterKey.key + masterKey.iv;
    secretKey = crypto.createHash('sha256').update(secretKey).digest('hex').substring(0, 32);
    let decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    let decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrypted.toString();
}