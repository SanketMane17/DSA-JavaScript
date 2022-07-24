
function mergeArrays(arr1, arr2, m, n) {


    // Using two pointers
    // Time complexity - O(n) 
    let i = 0, j = 0;
    let newArr = [];
    while (i < m || j < n) {
        if (i < m && j < n) {
            if (arr1[i] <= arr2[j]) {
                newArr.push(arr1[i]);
                i++;
            }
            else {
                newArr.push(arr2[j]);
                j++;
            }
        } else if (i == m) {
            newArr.push(arr2[j]);
            j++;
        } else if (j == n) {
            newArr.push(arr1[i]);
            i++;
        }
    }
    return newArr;

    // Time complexity - O((m+n) log(m+n))
    // let newArr = [];
    // for(let i = 0;i < m;i++) {
    //     newArr.push(arr1[i]);
    // }
    // for(let i = 0;i < n;i++) {
    //     newArr.push(arr2[i]);
    // }
    // return newArr.sort((a, b) => a - b);

    // Using biult-in functinos
    // return arr1.concat(arr2).sort((a, b) => a - b);
}

let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6];

// let arr1 = [4, 5, 6, 7, 8, 8];
// let arr2 = [0, 0];

// let arr1 = [12, 12, 34];
// let arr2 = [4, 5, 6, 7, 8, 8];

console.log(mergeArrays(arr1, arr2, arr1.length, arr2.length));