let wd = require('wd')

function createDriver(){
    return wd.promiseChainRemote({
        host: '127.0.0.1',
        port: 4723
    });
}

exports.driver = createDriver()