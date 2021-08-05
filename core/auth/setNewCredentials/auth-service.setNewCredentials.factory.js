module.exports = dependencies => async (event, data) => {
    const {persistence} = dependencies;
    let writeKey = {key: data, iv: Math.floor(Math.random() * 100) + 1, salt: 0, lastUpdate: new Date().getTime()}
    persistence.setWriteKey(writeKey);
    return {status: 200};
}