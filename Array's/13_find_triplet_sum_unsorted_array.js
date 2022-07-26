// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Input- 
// 3 7 4 2 5 7 5
// 5 2 4 5
// 3 2 1

// Output- 
// 16
// 11
// 0

function Max(arr, start, end) {

    let max = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] > max) 
            max = arr[i]
    }

    return max;
}

function arrSort(arr, start, end) {

    for(let i = start;i <= end;i++) {
        if(arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}

function findTriplet(n, arr) {

    // Time complexity - O(n^2)
    // 3 7 4 2 5 7 5 -> [4, 5, 7]

    let mid = 1;
    let max = 0;

    while (mid < n - 1) {
        let leftMax = Max(arr, 0, mid - 1);
        let rightMax = Max(arr, mid + 1, n - 1);

        if(leftMax > arr[mid]) {
            arrSort(arr, 0, mid - 2);
            console.log(arr);
        }
        // console.log(leftMax, rightMax);

        mid++;
    }

    return max;

    // Time complexity - O(n^3)
    // let max = 0;
    // for(let i = 0;i < n;i++)
    //     for(let j = i + 1;j < n;j++)
    //         for(let k = j + 1;k < n;k++)
    //             if(arr[i] < arr[j] && arr[j] < arr[k]) {
    //                 let sum = arr[i] + arr[j] + arr[k];

    //                 if(sum > max) 
    //                     max = sum;
    //             }

    // return max;
}

let arr = [3, 7, 4, 2, 5, 7, 5];
// let arr = [5, 2, 4, 5];
// let arr = [3, 2, 1];

let n = arr.length;

console.log(findTriplet(n, arr));