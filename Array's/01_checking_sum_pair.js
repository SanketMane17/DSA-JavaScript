// Checking sum 0(First pair) - Problem 1

// [-5, -4, -3, -2, 0, 2, 4, 6, 8] => Input
// [4, -4] == 0 => Output

function getPairSumZero(arr) {
    
    // Optimized code --> O(n)

    let left = 0; 
    let right = arr.length-1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0)
            return [arr[left], arr[right]];
        else if(sum > 0)
            right--;
        else if(sum < 0)
            left++;
    }
     
    // // O(n^2) quatratic time complexity
    // Brute force

    // for(let i = 0; i < arr.length; i++) {
    //     console.log("Outer");
    //     for(let j = i+1;j < arr.length;j++) {
    //         console.log("Inner");
    //         if(arr[i] + arr[j] === 0) {
    //             return [arr[i], arr[j]];
    //         }
    //     }
    // }
}

const output = getPairSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(output);