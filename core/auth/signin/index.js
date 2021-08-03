const factory = require('./auth-service.signin.factory.js');
const persistence = require("../../persistence/index.js");
const crypto = require("../../crypto/index.js");
const signin = factory({persistence, crypto});

module.exports = signin;