exports.getVersion = function () {
    const package = require('./package.json');
    return package.version;
}