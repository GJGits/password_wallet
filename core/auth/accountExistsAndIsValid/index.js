const factory = require('./auth-service.accountExistsAndIsValid.factory.js');
const persistence = require("../../persistence/index.js");
const accountExistsAndIsValid = factory({persistence});

module.exports = accountExistsAndIsValid;