const factory = require("./persistence-repository.readItems.factory.js");
const crypto = require("../../crypto/index.js");
const readItems = factory({crypto});
module.exports = readItems;