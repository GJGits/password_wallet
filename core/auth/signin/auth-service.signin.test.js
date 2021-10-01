const factory = require('./auth-service.signin.factory.js');

test('signin_fail', () => {
    const loadMasterKey = jest.fn( () => {
        return {
            readKey: {
                key: "",
                salt: 0,
                iv: 0,
                lastUpdate: 0
            },
            writeKey: {
                key: "",
                salt: 0,
                iv: 0,
                lastUpdate: 0
            }
        }
    });

    const setPlainTextPassword = jest.fn();
    const hash = jest.fn( (salt, data) => { return {salt: salt, content: hash}});
    const signinService = factory({loadMasterKey, setPlainTextPassword, hash});
    expect(signinService("abc")).toEqual({ status: 500, errorMessage: 'Wrong credentials' });
})

test('signin_ok', () => {
    const loadMasterKey = jest.fn( () => {
        return {
            readKey: {
                key: "d3104dc9a6f8a7dab0e0e86560f74dc9b84a84a24c3508dce2eb2c6b9a35beaf",
                salt: 3,
                iv: 0,
                lastUpdate: 0
            },
            writeKey: {
                key: "",
                salt: 0,
                iv: 0,
                lastUpdate: 0
            }
        }
    });

    const setPlainTextPassword = jest.fn();
    const hash = jest.fn( (salt, data) => { return {salt: 3, content: "d3104dc9a6f8a7dab0e0e86560f74dc9b84a84a24c3508dce2eb2c6b9a35beaf"}});
    const signinService = factory({loadMasterKey, setPlainTextPassword, hash});
    expect(signinService("foobar")).toEqual({ status: 200});
})