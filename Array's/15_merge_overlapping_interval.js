// Problem description
// Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

// Input- 
// 1 3
// 2 6
// 8 10
// 15 18

// Output 1
// 1 6
// 8 10
// 15 18

// Explanation- 
// Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

function mergetIntervals(arr, n) {

    arr.sort((a, b) => a[0] - b[0]);

    let prev_st = arr[0][0], prev_end = arr[0][1];
    let ans = [];

    if(n == 1) {
        ans.push(arr[0]);
    }

    for(let i = 1;i < n;i++) {
        let current_st = arr[i][0], current_end = arr[i][1];

        if(current_st <= prev_end) {
            prev_end = Math.max(current_end, prev_end);
        } else {
            ans.push([prev_st, prev_end]);
            prev_st = current_st;
            prev_end = current_end;
        }

        if(i == n - 1) {
            ans.push([prev_st, prev_end]);
        }
    }

    console.log(ans);
}

// let arr = [[1, 3], [2, 6], [15, 18], [8, 10]];
// let arr = [[1, 2], [2, 4], [6, 10], [9, 10], [10, 200]];
// let arr = [[1, 2]]
let arr = [[0, 20], [5, 10], [10, 15]];

mergetIntervals(arr, arr.length);