function reverseNum(n) {
    let ans = 0
    while(n != 0) {
        ans = (ans * 10) + (n % 10);
        n = Math.floor(n/10);
    }
    return ans;
}

let num = 23;
console.log(reverseNum(num));