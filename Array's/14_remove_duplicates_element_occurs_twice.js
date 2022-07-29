// Input-
// 7
// 2 2 2 3 4 4 9

// Output-
// 6
// 2 2 3 4 4 9

// Explanation 1
// Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].


function removeDuplicatesFromSortedArray(n, arr) {

    // Approach - 2;

    let st = 0;

    for(let i = 0;i < n;i++) {
        if(arr[i] == arr[i+1] && arr[i] == arr[i+2]) {
            continue;
        } else {
            arr[st] = arr[i];
            st++;
        }
    }

    return st;

    // Approach - 1;
    // let count = 1;
    // let index = 1;

    // for(let i = 1;i < n;i++) {

    //     if(arr[i] == arr[i - 1]) {
    //         count++;
    //     } else {
    //         count = 1;
    //     }

    //     if(count <= 2) {
    //         arr[index] = arr[i];
    //         index++;
    //     }
    // }

    // return index;
}

let arr = [2, 2, 2, 3, 4, 4, 9];
let n = arr.length;

for(let i = 0;i < removeDuplicatesFromSortedArray(n, arr) - 1;i++) {
    console.log(arr[i]);
}
// console.log(removeDuplicatesFromSortedArray(n, arr));