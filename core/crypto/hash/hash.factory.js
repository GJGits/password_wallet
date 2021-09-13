const crypto = require("crypto");

module.exports = dependencies => (salt, text) => {
    let cipher = "" + salt + text + salt;
    let hash = crypto.createHash('sha256').update(cipher).digest('hex');
    return {salt: salt, content: hash};
}