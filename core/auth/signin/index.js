const factory = require('./auth-service.signin.factory.js');
const persistence = require("../../persistence/index.js");
const crypto = require("../../crypto/index.js");
const loadMasterKey = persistence.loadMasterKey;
const setPlainTextPassword = persistence.setPlainTextPassword;
const hash = crypto.hash;
const signin = factory({loadMasterKey, setPlainTextPassword, hash});

module.exports = signin;