// str = "abcd"
// new order = [2, 4, 3, 1]
// new str = "dacb"
//    position
// a - 4
// b - 4
// c - 3
// d - 1

function reorder(str, arr) {
    let ans_arr = str.split("");
    // console.log(ans_arr);
    for(let i = 0;i < str.length;i++) {
        let new_pos = arr[i] - 1;
        ans_arr[new_pos] = str[i];
    }
        
    return ans_arr.join("");
}

console.log(reorder("abcd", [2, 4, 3, 1]));