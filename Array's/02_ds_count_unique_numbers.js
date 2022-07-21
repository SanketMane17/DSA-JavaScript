// [1,2,2,3,4,4,5,6,7,8,8]
// output = > 8


function countUniqueNumbers(arr) {
    
    if(arr.length > 0) {
        let i = 0;
        for(let j = 1;j < arr.length;j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }

    // Another simple approch using includes()

    // const newArr = [];
    // for(let number of arr) {
    //     if(!newArr.includes(number)) {
    //         newArr.push(number);
    //     }
    // }
    // return newArr.length;
}

const arr = [1,2,2,3,4,4,5,6,7,8,8];
console.log(countUniqueNumbers(arr));