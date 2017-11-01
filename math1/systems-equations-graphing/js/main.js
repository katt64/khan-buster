/*
 * main.js      Javascript program to cheat "Systems of equations with graphing"
 *
 * See relevant documentation in `README.md`.
 */

/*
 * Gaussian elimination function
 * Forked from: https://github.com/itsravenous/gaussian-elimination
 */
const gauss = require('./gaussian-elimination/gauss.js');

/*
 * dimensions(mat)      Finds row-column dimensions of a matrix `mat`, with
 * `column` being the least amount of column length found.
 */
const dimensions = (mat) => {
  if (typeof(mat) !== 'object') {
    throw("Expected a matrix `mat` in `dimensions(mat)`.");
  }

  let rows = mat.length, columns = 0;
  
  for (let i = 0; i < mat.length; i++) {
    if (typeof(mat[i]) !== 'object') {
      throw("Expected a matrix `mat` in dimensions(mat)`.");
    }
    
    if (columns === 0 || mat[i].length < columns) {
      columns = mat[i].length;
    }
  }

  return [rows, columns];
}

/*
 * class gaussianMatrix         Provides organization of data for Gaussian
 * elimination.
 */
class gaussianMatrix {
  constructor(matrix, constants) {
    if (dimensions(matrix)[1] !== constants.length) {
      throw("Matrix column size not equal to constants column size.");
    }

    this._mat = matrix;
    this._consts = constants;
  }

  get mat() {
    return this._mat;
  }

  set mat(newMat) {
    if (typeof(newMat) !== 'object' || typeof(newMat[0]) !== 'object' || typeof(newMat[0][0]) !== 'number') {
      throw("Expected a matrix of reals `newMat` to bet set as value of matrix.");
    }
    else {
      this._mat = newMat;
    }
  }

  get consts() {
    return this._consts;
  }

  set consts(newConsts) {
    if (typeof(newConsts) !== 'object' || typeof(newConsts[0]) !== 'number') {
      throw("Expected a vector of reals `newConsts` to be set as value of constants.");
    }
    else {
      this._consts = newConsts;
    }
  }
}

const nightmareMatrix = new gaussianMatrix([[0, 0], [0, 0]], [0, 0]);

if (nightmareMatrix.mat.every(row => row.every(col => col === 0)) &&
  nightmareMatrix.consts.every(row => row === 0)) {
  throw("Do not run this JavaScript file directly. Read the documentation on how to use this program.");
}

// Convert equations to slope-intercept form
console.log("Slope-intercept");
nightmareMatrix.mat.forEach((row, i) => {
  console.log("Equation " + (i+1) + "\ty = " + row[0] / -(row[1]) + "x + " +
    -(nightmareMatrix.consts[i] / -(row[1])));
});

// Solve system for a real solution
console.log("\nSolution");
const sols = gauss(nightmareMatrix.mat, nightmareMatrix.consts);
sols.forEach((sol, i) => {
  i === 0 ? console.log("x = " + sol) : console.log("y = " + sol);
});

/* vim: filetype=javascript sw=2 wrap tw=80
 */
