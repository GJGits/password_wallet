const factory = require("./wallet-service.getWalletItemById.factory.js");
const persistence = require("./../../persistence/index.js");
const getWalletItemById = factory({persistence});
module.exports = getWalletItemById;