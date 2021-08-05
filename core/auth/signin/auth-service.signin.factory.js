module.exports = dependencies => (event, data) => {

    const persistence = dependencies.persistence;
    const crypto = dependencies.crypto;

    let masterKey = persistence.loadMasterKey();
    let hash = crypto.hash(masterKey.salt, data);

    if (hash.content === masterKey.key) {
        persistence.setVolatileClearPassword(data);
        return { status: 200 }; // request ok
    }
    
    return { status: 500, errorMessage: 'Wrong credentials' }; // wrong credentials

}