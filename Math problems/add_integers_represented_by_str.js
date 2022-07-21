function addBigIntergerStr(s1, s2) {
    
    if(s1.length < s2.length) {
       let temp = s1;
       s1 = s2;
       s2 = temp;
    }

    let diff = s1.length - s2.length;
    console.log("diff ", diff);
    for(let i = 0;i < diff;i++) {
        s2 = '0' + s2;
    }
    
    let ans = "", carry = 0;
    for(let i = s1.length - 1;i >= 0;i--) {
        let currentSum = (s1[i].charCodeAt(0) - '0'.charCodeAt(0)) + 
        (s2[i].charCodeAt(0) - '0'.charCodeAt(0)) + carry;

        ans += currentSum % 10;
        carry = Math.floor(currentSum / 10);
    }
    
    if(carry == 1)  
        ans += '1';
    
    return ans.split("").reverse().join("");
}

// console.log(addBigIntergerStr("9245", "845"));
console.log(addBigIntergerStr("6123519184948711", "80494019977490432571710"));
// addBigIntergerStr("6123519184948711", "80494019977490432571710")
