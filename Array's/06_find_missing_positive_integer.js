// i/p = 4, 1, 5, 2
// o/p = 3

function findMissing(arr) {

    arr.sort((a, b) => a - b)

    // Crio solution
    let ans = 1;
    for(let i = 0;i < arr.length;i++) {
        if(arr[i] > 0) {
            if(arr[i] != ans) {
                return ans;
            } else {
                ans++;
            }
        }
    }
    return ans;
    
    // Developed by myself
    // 4 test cases are not working
    // for(let i = 0;i < arr.length;i++) {
    //     if(arr[i] > 0) {
    //         if(arr[i] + 1 == arr[i + 1]) {
    //             continue;
    //         } else {
    //             return arr[i] + 1;
    //         }
    //     }
    // }
}

// let arr = [-17, -9, 19, -3, 8, -1, -11, 7, 15, -7, -14, 13, 16, -8, 12, 17, 20, -18, 6, 3, -4, -19, -20, 5, -10, 0, -12, 11, -2, -13, -16, -6, 4, 2, -5, 18,9, 14, -15, 1];

// let arr = [3, 4, -1, 1];
// let arr = [-4, -5, 2, 4, -7, 1, 3];
// let arr = [-2, -1, 1, 2, 3, 4];

let arr = [0, 1, 6, 7, 8];
console.log(arr.sort((a, b) => a - b));
console.log(findMissing(arr));