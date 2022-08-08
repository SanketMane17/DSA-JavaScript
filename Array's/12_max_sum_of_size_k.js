// Find max sum of 'k' sized subarrays
// [100, 200, 300, 400], k = 2
// sum = 39 [300, 400] --> Output

function findSum(arr, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += arr[i];
    }
    return sum;
}

// Optimal solution [finding sum only once and utilize through out the array]
// Time complexity - O(n + k) => O(n)

function consecutiveSum(arr, k) {
    let n = arr.length;

    let currSum = findSum(arr, 0, k - 1);
    let max = -1;
    let start = 1, end = k;

    while(end < n) {
        currSum = currSum - arr[start - 1] + arr[end];
        if(currSum > max)
            max = currSum;
        
        start++;
        end++;
    }
    return max;
}

// Sliding window 
// Time complexity = O(n*k)
// function consecutiveSum(arr, k) {
   
//     let n = arr.length;
//     let start = 0, end = k - 1;
//     let currSum = 0, max = -1;

//     while(end < n) {
//         currSum = findSum(arr, start, end);
//         if(currSum > max) 
//             max = currSum;
        
//         start++;
//         end++
//     }
//     return max;
// }

// let arr = [100, 200, 300, 400];
// let k = 2;
let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k = 4;

console.log(consecutiveSum(arr, k));