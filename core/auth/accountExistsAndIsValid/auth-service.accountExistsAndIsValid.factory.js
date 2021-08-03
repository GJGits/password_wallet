const fs = require('fs');

module.exports = dependencies => async (event, data) => {

    const { persistence } = dependencies;

    let masterKey = persistence.loadMasterKey();

    console.log("masterkey:", masterKey);

    if (!masterKey.key)
        return { status: 400 }; // not setted

    let lastUpdate = new Date(masterKey.lastUpdate);
    let today = new Date();
    let diffTime = Math.abs(today - lastUpdate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 60)
        return { status: 205 }; // outdated

    return { status: 200 }; // ok
}