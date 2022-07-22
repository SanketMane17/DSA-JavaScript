// i/p = 3
// o/p = 1 x 3 + 3 x 5 + 5 x 7 = 53

// i/p = 4
// o/p = 1 x 3 + 3 x 5 + 5 x 7 + 7 x 9 = 116

// i/p = 5
// o/p = 1 x 3 + 3 x 5 + 5 x 7 + 7 x 9 + 9 x 11 = 215

function seriesSumI(n) {
   
    let newArr = [];
    for(let i = 1;i <= ((n*2) + 1);i++) {
        if(i % 2 != 0) {
            newArr.push(i)
        }
    }

    let sum = 0;
    for(let i = 0;i < newArr.length - 1;i++) {
        sum += newArr[i] * newArr[i+1];
    }

    console.log(sum);
}

seriesSumI(5);