module.exports = dependencies => (event, data) => {

    const persistence = dependencies.persistence;
    const crypto = dependencies.crypto;

    let masterKey = persistence.loadMasterKey();
    let readKey = masterKey.readKey;
    let hash = crypto.hash(readKey.salt, data);

    if (hash.content === readKey.key) {
        persistence.setReadPlainTextPassword(data);
        return { status: 200 }; // request ok
    }
    
    return { status: 500, errorMessage: 'Wrong credentials' }; // wrong credentials

}