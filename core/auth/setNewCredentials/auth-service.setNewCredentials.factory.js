module.exports = dependencies => async (event, data) => {
    const {persistence} = dependencies;
    let masterKey = {key: data, iv: Math.floor(Math.random() * 100) + 1, salt: 0, lastUpdate: "" + new Date().getTime()}
    persistence.storeMasterKey(masterKey);
    return {status: 200};
}