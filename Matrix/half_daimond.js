
// *
// **
// ***
// ***
// **
// *

function printDaimond(n) {

    let arr = [];
    let str = "";

    let row = 1;
    while (row <= n) {
        let col = 1;
        while (col <= row) {
            str += "* ";
            col++;
        }
        str += "\n";
        row++;
    }

    row = 1;
    while (row <= n) {
        let col = n - row;
        while (col != 0) {
            str += "* ";
            col--;
        }
        str += "\n";
        row++;
    }
    arr.push(str);

    return arr;
}

let arr = printDaimond(3);
arr.forEach(line => console.log(line))
// console.log(printDaimond(3));