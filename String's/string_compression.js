// str = aabccccc
// i/p = a2bc5

function strCompression(str) {
    let res = "";
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        count++;
        if(str[i] != str[i + 1]) {
            res += str[i] + "" + count;
            count = 0;
        }
    }

    return res;
}

// let str = "aabccccc";
let str = "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"; // y60h68y59

console.log(strCompression(str));