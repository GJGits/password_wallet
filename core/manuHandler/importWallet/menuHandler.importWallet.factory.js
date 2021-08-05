const fs = require("fs");

module.exports = dependencies => (filePath) => {

    const options = { encoding: 'UTF-8' };
    let data = fs.readFileSync(filePath, options);
    let settings_rgx = /{"masterKey":{"key":"\w+","iv":\d+,"salt":\d+,"lastUpdate":"\d+"},"wallet":\[({"id":\d+,"serviceName":"[\w\s!\-?$%&\.@]+","description":"[\w\s!\-?$%&\.@]+","credentials":\[({"name":"[\w\s!\-?$%&\.@]+","value":"[\w\s!\-?$%&\.@]+"},?)+\],"secrets":\[({"name":"[\w\s!\-?$%&\.@]+","value":{"iv":"\w+","content":"\w+"},"lastUpdate":"\d+"},?)+\]},?)+\]}/
    
    if (settings_rgx.test(data)) {

        let wallet = JSON.parse(data);
        fs.writeFileSync(__dirname + '/../../storage/wallet.json', JSON.stringify(wallet.wallet));
        fs.writeFileSync(__dirname + '/../../storage/master-key.json', JSON.stringify(wallet.masterKey));
        return true;
    }

    return false;
}