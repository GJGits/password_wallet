module.exports = dependencies => (event, data) => {

    const loadMasterKey = dependencies.loadMasterKey;
    const setPlainTextPassword = dependencies.setPlainTextPassword;
    const hash = dependencies.hash;

    let masterKey = loadMasterKey();
    let readKey = masterKey.readKey;
    let givenPasswordHash = hash(readKey.salt, data);

    if (givenPasswordHash.content === readKey.key) {
        setPlainTextPassword(data);
        return { status: 200 }; // request ok
    }

    return { status: 500, errorMessage: 'Wrong credentials' }; // wrong credentials

}