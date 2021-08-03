const factory = require("./wallet-service.getWalletItems.factory.js");
const persistence = require("../../persistence/index.js");
const getWalletItems = factory({persistence});
module.exports = getWalletItems;