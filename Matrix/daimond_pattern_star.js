// n = 4;

    //     *
    //    ***
    //   *****
    //  ******* 

function printTringle(n) {
    let row = 1;
    while(row <= n) {
        let temp = "";
        let spaces = n - row;
        while(spaces > 0) {
            temp += " ";
            spaces--;
        }

        let col = 1;
        while(col <= row) {
            temp += "*";
            col++;
        }

        let next = n - row + 1;
        while(next < n) {
            temp += "*";
            next++;
        }
        console.log(temp);
        row++;
    }
}

printTringle(8);

