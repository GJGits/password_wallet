module.exports = dependencies => (event, data) => {
    const {persistence} = dependencies;
    return persistence.getItemById(data);
}