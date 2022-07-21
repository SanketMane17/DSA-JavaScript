// [1,2,3,4,3,5,4,6,7,8] , element's = 10
// consecutive numbers = num = 4

// i < elements's - num + 1 => Total 7 iteration's

function largestSum(arr, num) {
    
    if(num > arr.length) {
        throw new Error("Array length is less than size of consecutive numbers");
    }

    let max = 0;
    for(let i = 0;i < arr.length - num + 1;i++) {// 7 iteration's
        let temp = 0;
        for(let j = 0;j < num;j++) {
            temp += arr[i + j];
        }

        if(temp > max)  
            max = temp;
    }


    // If the array is sorted (Which a condition i.e If array is sorted, then use following approach)

    // arr.sort((a, b) => a - b);
    // // console.log(arr);
    // let max = 0;
    // for(let i = arr.length - num;i < arr.length;i++) {
    //     max += arr[i];
    //     // console.log(arr[i]);

    // }
    return max;
}

console.log(largestSum([1,2,3,4,3,5,4,6,7,8], 4))
// console.log(largestSum([8,7,3,2,9,1,3,5], 4))
// largestSum([1,2,3,4,3,5,4,6,7,8], 4);