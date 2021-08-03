module.exports = dependencies => (event, data) => {

    const persistence = dependencies.persistence;
    const crypto  = dependencies.crypto;

    let masterKey = persistence.loadMasterKey();
    let hash = crypto.hash(masterKey.salt, data);
    let outdated = false;

    let lastUpdate = new Date(masterKey.lastUpdate);
    let today = new Date();
    let diffTime = Math.abs(today - lastUpdate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 60)
        outdated = true;

    if (hash.content === masterKey.key && !outdated)
        return { status: 200 }; // request ok
    if (hash.content === masterKey.key && outdated)
        return { status: 205 }; // request ok but password outdated
    return { status: 500, errorMessage: 'Wrong credentials' }; // wrong credentials

}