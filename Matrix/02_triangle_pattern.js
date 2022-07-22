// printTringle(4);

// Basic approch - O(n^2)
// function patternPrintingI(n) {
//     let newArr = [];
//     for(let i = 0;i < n;i++) {
//         let str = "";
//         for(let j = 0;j <= i;j++) {
//             str += "* ";
//         }
//         newArr.push(str);
//     }
//     // console.log(newArr);
//     return newArr;
//  }

// Optimized code - O(n)

function patternPrintingI(n) {
    let newArr = [];
    let temp = "";
    for (let i = 0; i < n; i++) {
        temp += "* ";
        newArr.push(temp);
    }
    return newArr;
}

function main() {
    let n = 4;
    let arr = patternPrintingI(n);
    arr.forEach(line => console.log(line))
}

main();