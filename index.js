function getVersion() {
    const package = require('./package.json');
    return package.version;
}

module.exports = getVersion;