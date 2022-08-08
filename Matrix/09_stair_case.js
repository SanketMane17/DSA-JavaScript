function stairCase(n) {

    let row = 1;
    let str = "";
    while (row <= n) {

        let space = n - row;
        while(space) {
            str += " ";
            space--;
        }

        let col = 1;
        while (col <= row) {
            str += "#"
            col++;
        }
        str += "\n";
        row++;
    }
    console.log(str);
}

stairCase(6);