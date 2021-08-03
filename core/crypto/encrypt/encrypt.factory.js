const crypto = require("crypto");

module.exports = dependencies => (text, masterKey) => {
    let algorithm = 'aes-256-ctr';
    let secretKey = masterKey.key;
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return { iv: iv.toString('hex'), content: encrypted.toString('hex') };
}