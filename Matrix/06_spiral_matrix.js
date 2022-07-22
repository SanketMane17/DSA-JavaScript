// i/p = 3
// o/p = 1 2 3
//       8 9 4
//       7 6 5

function printSpiralMatrix(n) {

    let topmostRow = 0, bottommostRow = n - 1;
    let leftmostCol = 0, rightmostCol = n - 1;
    let cnt = 1;

    // Create an 2D array
    let arr = new Array(n);
    for(let i = 0;i < arr.length;i++) {
        arr[i] = [];
    }

    // Another method for creating 2D array
    // let arr = new Array(n);
    // for (let i = 0; i < arr.length; i++) {
    //     arr.push(new Array(n));
    // }

    while (cnt <= n * n) {

        // fill the topmostRow from leftmostCol to rightmostCol
        for (let i = leftmostCol; i <= rightmostCol; i++) {
            arr[topmostRow][i] = cnt;
            cnt++;
        }
        topmostRow++;

        // fill the rightmostCol from topmostRow to bottommostRow
        for (let i = topmostRow; i <= bottommostRow; i++) {
            arr[i][rightmostCol] = cnt;
            cnt++;
        }
        rightmostCol--;

        // fill the bottommostRow from rightmostCol to leftmostCol
        for (let i = rightmostCol; i >= leftmostCol; i--) {
            arr[bottommostRow][i] = cnt;
            cnt++;
        }
        bottommostRow--;

        // fill the leftmostCol from bottommostRow to topmostCol
        for (let i = bottommostRow; i >= topmostRow; i--) {
            arr[i][leftmostCol] = cnt;
            cnt++;
        }
        leftmostCol++;
    }

    return arr;
}

printSpiralMatrix(3).forEach(line => console.log(line));
