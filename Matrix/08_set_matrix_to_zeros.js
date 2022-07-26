
function setMatrixZeros(matrix, M, N) {
    let row = new Array(M)
    let col = new Array(N);

    for (let i = 0; i < M; i++)
        row[i] = false
    for (let j = 0; j < N; j++)
        col[j] = false

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] == 0) {
                row[i] = true
                col[j] = true
            }
        }
    }

    console.log(row, col);

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (row[i] == true || col[j] == true) {
                matrix[i][j] = 0;
            }
        }
    }

    // matrix.forEach(row => console.log(row));
}

// let matrix = [[1, 1, 1], [1, 0, 1,], [1, 1, 1]];
// console.log(m, n);

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
let m = matrix.length;
let n = matrix[0].length;
setMatrixZeros(matrix, m, n);