
function isPalindrome(str) {

    // Optimized approch 
    // Time complexity - O(str.length)
    // Space complecity - O(1)
    
    let start = 0, end = str.length - 1;

    while(start <= end) {
        if(str[start] !== str[end])
            return false;
        
        if(str[start] === str[end]) {
            start++;
            end--;
        }
    }
    return true;

    // Time and space complexity - O(str.length)
    // let reverseStr = "";
    // for(let i = str.length - 1;i >= 0;i--) {
    //     reverseStr += str[i];
    // }
    
    // return str === reverseStr;
    // return str === str.split("").reverse().join("");
}

console.log(isPalindrome("naman"));
console.log(isPalindrome("sanket"));
console.log(isPalindrome("malayalam"));