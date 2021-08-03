module.exports = dependencies => async (event, data) => {
    const {persistence} = dependencies;
    let masterKey = {key: data, salt: 0, lastUpdate: "" + new Date().getTime()}
    persistence.storeMasterKey(masterKey);
    return {status: 200};
}