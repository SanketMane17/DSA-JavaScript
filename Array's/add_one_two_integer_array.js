// Not understood (copied from gfg)

function plusOne(a) {
    let str1 = a.join("");
    let str2 = '1';
    for(let i = 0;i < str1.length - 1;i++) {
        str2 = '0' + str2;
    }

    let ans = "", carry = 0;
    for(let i = str1.length - 1;i >= 0;i--) {
        let currentSum = (str1[i].charCodeAt(0) - '0'.charCodeAt(0)) + (str2[i].charCodeAt(0) - '0'.charCodeAt(0)) + carry;

        ans += currentSum%10;
        carry = Math.floor(currentSum/10);
    }
    if(carry == 1)
        ans += '1';

    return ans.split("").reverse();
}

// let digits = [1, 2, 3, 4, 5];
// let digits = [1,1,1];
let digits = [9, 9, 9, 9];
// let result = plusOne(digits);
// console.log(...result);
console.log(plusOne(digits))