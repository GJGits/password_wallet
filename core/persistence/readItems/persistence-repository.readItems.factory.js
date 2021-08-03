const fs = require("fs");

module.exports = dependecies =>  (masterKey) => {
    let data = fs.readFileSync(__dirname + '/../../storage/wallet.json');
    // TODO: decrypt secrets using masterKey
    return JSON.parse(data);
}