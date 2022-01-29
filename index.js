const { Vector, Matrix } = require("./matrix.js");
Object.assign(exports, {Vector, Matrix});

exports.getVersion = function () {
    const package = require('./package.json');
    return package.version;
}

