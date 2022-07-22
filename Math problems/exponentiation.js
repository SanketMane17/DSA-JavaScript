// i/p - a, b
// o/p - return a to the power b without using inbuilt function

// Time complexity - O(log b)
// (a^2) * b/2 = a^b

function power(a, b) {
    let res = 1;
    while(b > 0) {
        if(b % 2 == 1) {
            res *= a;
        }
        
        b = Math.floor(b / 2);
        a = a * a;
    }
    return res;
}


// Time complexity - O(b)
// function power(a, b) {
//     let ans = 1;
//     for(let i = 0;i < b;i++) {
//         ans *= a;
//     }
//     return ans;
// }

let a = 2, b = 5;
console.log(power(a, b));
// console.log(power(2, 5));
// console.log(Math.pow(34, 45));