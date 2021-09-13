const fs = require('fs');

module.exports = dependencies => async (event, data) => {

    const { persistence } = dependencies;

    let masterKey = persistence.loadMasterKey();
    let readKey = masterKey.readKey;

    if (!readKey.key)
        return { status: 400 }; // not setted

    let lastUpdate = new Date(readKey.lastUpdate);
    let today = new Date();
    let diffTimeInMilliseconds = Math.abs(today - lastUpdate);
    let durationOfDayInMilliseconds = 1000 * 60 * 60 * 24;
    let diffDays = Math.ceil(diffTimeInMilliseconds / durationOfDayInMilliseconds);

    if (diffDays > 60)
        return { status: 205 }; // outdated

    return { status: 200 }; // ok
}