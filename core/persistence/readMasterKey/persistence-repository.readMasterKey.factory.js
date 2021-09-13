const fs = require("fs");

module.exports = dependencies => () => {
    let data = fs.readFileSync(__dirname + '/../../storage/master-key.json');
    return JSON.parse(data);
}