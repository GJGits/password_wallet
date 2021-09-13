const factory = require('./auth-service.setNewCredentials.factory.js');
const persistence = require("../../persistence/index.js");
const setNewCredentials = factory({persistence});

module.exports = setNewCredentials;