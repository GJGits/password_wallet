module.exports = dependencies => (event, data) => {
    const {persistence} = dependencies;
    persistence.deleteItem(data);
}