const factory = require("./persistence-repository.writeItems.factory.js");
const crypto = require("../../crypto/index.js");
const writeItems = factory({crypto});
module.exports = writeItems;