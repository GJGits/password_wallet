const factory = require("./persistence-repository.writeMasterKey.factory.js");
const crypto = require("../../crypto/index.js");
const writeMasterKey = factory({crypto});
module.exports = writeMasterKey;