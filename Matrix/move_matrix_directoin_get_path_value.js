// Not solved

function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {

    let res = [];

    if (dirToMove == 1) {
        for(let i = 1;i <= stepsToMove;i++) {
            currPosCol += i;
            res.push(matrix[currPosRow][currPosCol]);
        }
    } else if (dirToMove == 2) {
        for (let i = 1; i <= stepsToMove; i++) {
            currPosRow += i;
            res.push(matrix[currPosRow][currPosCol]);
        }
    } else if (dirToMove == 3) {
        for (let i = stepsToMove - 1; i > 0; i--) {
            currPosCol += i;
            res.push(matrix[currPosRow][currPosCol]);
        }
    } else if (dirToMove == 4) {
        for (let i = stepsToMove - 1; i > 0; i--) {
            res.push(matrix[i][currPosCol]);
        }
    }

    console.log(res);
}

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix = [[1, 2, 3, 4,], [5, 6, 7, 8,], [9, 10, 11, 12,]];
let currPosRow = 0;
let currPosCol = 2;
// let dirToMove = 1; // Right
// let dirToMove = 3; // Left
let dirToMove = 3; // Down
let stepsToMove = 1;

// let res = matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove);
matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove);