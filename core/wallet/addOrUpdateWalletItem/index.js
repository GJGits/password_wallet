const factory = require("./wallet-service.addOrUpdateWalletItem.factory");
const persistence = require("../../persistence/index.js");
const addOrUpdateWalletItem = factory({persistence});
module.exports = addOrUpdateWalletItem;