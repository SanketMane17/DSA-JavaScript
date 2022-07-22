function cyclicRotation(n, arr, k) {
    for (let i = 0; i < k; i++)
    {    
        let j, temp;
        //Stores the last element of the array    
        temp = arr[n - 1];
        for (j = n - 1; j > 0; j--) {
            //Shift element of array by one    
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }

    return arr;
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 2;
console.log(cyclicRotation(n, arr, k));