
let digits = {10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E',15: 'F'};
function decToBin(num, b) {
    let ans = [];
    let temp = 0;

    while(num != 0) {
        temp = num % b;
        console.log(temp);
        if(temp > 9)
            temp = digits[temp];
        ans.unshift(temp);
        num = Math.floor(num / b);
    }
    return ans.join("");
}

console.log(decToBin(26, 14));