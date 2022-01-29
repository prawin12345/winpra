function isRectangle(components) {
    for (let i = 0; i < components.length; i++) {
        if (components[i].length !== components[0].length) {
            return false;
        }
    }
    return true;
}

function submatrix(matrix, i, j) {
    var m = [...matrix.components];
    m.splice(i, 1);
    m = m.map(arr => arr.slice(1, arr.length));
    return new Matrix(m);
}

class Matrix {
    constructor (components = [[]]) {
        if (!isRectangle(components)) throw new Error("invalid components");
        this.components = components;
    }

    get size() {
        return [this.components.length, this.components[0].length];
    }
    get isSquare() {
        return this.components.length === this.components[0].length;
    }

    get determinant() {
        if (!this.isSquare) throw new Error("determinant not defined for non-square matrices");
        if (this.size[0] === 2) {
            let [a, b, c, d] = this.components.flat();
            return a*d - b*c;
        }
        var sum = 0;
        var j = 0;
        for (var i = 0; i < this.components.length; ++i) {
            sum += 
                this.components[i][j] 
                * (-1)**(i+j) 
                * submatrix(this, i, j).determinant;
        }
        return sum;
    }
}
exports.Matrix = Matrix;

class Vector extends Matrix {
    constructor (components = [[]], isFlat = false) {
        if (isFlat) components = components.map(elem => [elem]);
        super(components);
    }

    get size() {
        return [this.components.length, 1];
    }
    get sum() {
        return this.components.flat().reduce((sum, elem) => sum + elem, 0);
    }
    get length() {
        return this.components.flat()
            .map(elem => elem**2)
            .reduce((sum, elem) => sum + elem, 0)
            **(1/2);
    }
}
exports.Vector = Vector;