// Sum of rows, columns and all daigonals are same 
// that are called magic square

function totalSum(n) {
    let sum = 0;

    for(let i = 1;i <= n*n;i++) {
        sum += i;
    }
    return sum / n;
}

function isRowColSumMagic(n, matrix, sum) {
    for(let i = 0;i < n;i++) {
        let row_sum = 0, col_sum = 0;
        for(let j = 0;j < n;j++) {
            row_sum += matrix[i][j];
            col_sum += matrix[j][i];
        }
        if(row_sum !== sum || col_sum !== sum)
                return false;
    }
    return true;
}

function isDaigSumMagic(n, matrix, sum) {
    let prim_daig_sum = 0;
    let sec_daig_sum = 0;
    for(let i = 0;i < n;i++) {
        for(let j = 0;j < n;j++) {
            if(i === j)
                prim_daig_sum += matrix[i][j];
            if(i + j === n - 1)
                sec_daig_sum += matrix[i][j];
        }
    }
    if(prim_daig_sum !== sum || sec_daig_sum !== sum)
        return false;
    return true;
}

function checkMagicSquare(n, matrix) {
    
    let sum = totalSum(n);
    let isRowColMagic = isRowColSumMagic(n, matrix, sum);

    let isDaigMagic = isDaigSumMagic(n, matrix, sum);
   
    if(isRowColMagic == true && isDaigMagic == true) {
        return true;
    }
    return false;
}

let matrix = [[4, 9, 2], [3, 5, 7],[8, 1, 6]];

let result = checkMagicSquare(3, matrix);
if(result === true) {
    console.log("Yes");
} else {
    console.log("No");
}