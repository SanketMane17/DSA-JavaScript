// i/p = 4
// factor = 1 2 4
// sum of factors = 7
// o/p = 3 7

// Optimized approch
// Time complexity - O(root(n))

function findFactors(n) {
    let cnt = 0, sum = 0;
    for(let i = 1;i <= Math.floor(Math.sqrt(n));i++) {
        if(n % i == 0) {
            let other_factor = n / i; // (1, 16)(2, 8)(4, 4)
            if(i == other_factor) { // (4, 4) - (i, n/i)
                cnt += 1; // count only one time eg.(4,4)
                sum += i;
            } else {
                cnt += 2;
                sum += i;
                sum += other_factor;
            }
        }
    }
    return [cnt, sum];
}

// Time complexity - O(n)
// function sumOfFactors(arr) {
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function findFactors(n) {
//     let newArr = [];
//     for(let i = 1;i <= n;i++) {
//         if(n % i == 0)
//             newArr.push(i);
//     }

//     return [newArr.length, sumOfFactors(newArr)];
// }

console.log(findFactors(8));
// console.log(findFactors(9));