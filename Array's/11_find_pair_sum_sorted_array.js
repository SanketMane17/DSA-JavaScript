

function findPaiSum(arr, k) {

    // Optimal way - Two pointer approch

    let start = 0, end = arr.length - 1;
    let sum;
    while(start <= end) {
        sum = arr[start] + arr[end];
        if(sum == k)
            return true;
        
        else if(sum > k)
            end--;
        else 
            start++;
    }
    return false;

    // Time complextiy - O(n)
    // for(let i = 0;i < arr.length;i++) {
    //     for(let j = i + 1;j < arr.length;j++) {
    //         if(arr[i] + arr[j] == k) {
    //             return true;
    //         }
    //     }
    // }
    // return false;
}

let arr = [2, 4, 5, 8, 9];
let k = 7;

console.log(findPaiSum(arr, k));