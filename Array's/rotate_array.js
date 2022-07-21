function reverse(arr, first, last) {
    while(first < last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;

        first++;
        last--;
    }
}

function rotateArray(arr, d) {
    reverse(arr, 0, d -1);
    reverse(arr, d, arr.length - 1);
    reverse(arr, 0, arr.length - 1);

    return arr;
}

let arr = [1, 2, 3, 4, 5];
let d = 2;
// 3, 4, 5, 1, 2

console.log(rotateArray(arr, d));