
// // This will need to find factorial for greater numbers also
// function factorial(n) {
//     let fact = 1;
//     for(let i = 1;i <= n;i++) {
//         console.log(fact, i, fact * i);
//         fact *= i;
//     }
//     return fact;
// }
// function findTrailingZero(n) {
//     let fact =  BigInt(factorial(n));
//     let cnt = 0;

//     let temp = 0;
//     while(fact != 0) {
//         temp = fact % 10;
//         if(temp == 0) 
//             cnt++;
//         if(temp > 0)
//             break;
//         fact = Math.floor(fact / 10);
//     }
//     return cnt;
// }

// Another approch => finding number of 5's as factors for a given number and special case for 5 ^ 1, 5 ^ 2 until less than the given number

// we have to count the multiples of 5, 25, 125, pow(5, i)...
function findTrailingZero(n) {
    let trailingZeros = 0;
    
    for(let i = 5;i <= n;i *= 5) {
        trailingZeros += n / i;
    }

    return trailingZeros;
}

// console.log(factorial(992792900));
// console.log(factorial(5));

console.log(findTrailingZero(100));
// findTrailingZero(10)
// console.log(CalculateSpecialCase(10));