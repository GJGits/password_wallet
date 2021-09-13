const factory = require("./wallet-service.deleteWalletItem.factory.js");
const persistence = require("./../../persistence/index.js");
const deleteWalletItem = factory({persistence});
module.exports = deleteWalletItem;