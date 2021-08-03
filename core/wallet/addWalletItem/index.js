const factory = require("./wallet-service.addWalletItem.factory.js");
const persistence = require("../../persistence/index.js");
const addWalletItem = factory({persistence});
module.exports = addWalletItem;