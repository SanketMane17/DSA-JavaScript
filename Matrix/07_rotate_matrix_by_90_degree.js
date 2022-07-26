function rotateMatrix(matrix) {

    let n = matrix.length;
    let newMat = new Array(n);
    for (let i = 0; i < n; i++) {
        newMat[i] = [];
    }

    let topmostRow = 0, bottommostRow = n - 1;
    let rigthmostCol = n - 1;

    for(let j = 0;j < matrix.length;j++) {
        for (let i = topmostRow; i <= bottommostRow; i++) {
            newMat[i][rigthmostCol] = matrix[j][i];
        }
        rigthmostCol--;
    }

    printMatrix(newMat);
}

function printMatrix(matrix) {

    matrix.forEach(arr => {
        console.log(arr);
    })
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

// console.log("Input- ");
// printMatrix(matrix);
// console.log("");

rotateMatrix(matrix);

// console.log("Output- ");
// printMatrix(matrix);