module.exports = dependencies => (event, data) => {
    const {persistence} = dependencies;
    persistence.addItem(data);
}