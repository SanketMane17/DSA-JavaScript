

function findPairUnsortedArr(nums, target) {

    // Time complexity - O(n^2)
    // for(let i = 0;i < nums.length;i++) {
    //     for(let j = i+1;j < nums.length;j++) {
    //         if(nums[i] + nums[j] == target)
    //             return [i, j];
    //     }
    // }
}

let nums = [1, 2, 3, 2, 1]
let target = 2;

// let nums = [2, 4, 5, 9, 8];
// let target = 7;

console.log(findPairUnsortedArr(nums, target));
// findPairUnsortedArr(nums, target);