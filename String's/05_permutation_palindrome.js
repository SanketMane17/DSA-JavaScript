// nnaamm
// true
// nnaamm is a permutation of namman, which is a palindrome

// hello
// False
// hello is not a permutation of any palindrome

// Aab
// False
// Aab is not a permutation of any palindrome

function isPermutationPalindrome(str) {
   
    // using object
    let count = {};

    for(let i = 0;i < str.length;i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }

    let odd_count = 0;
    for(let letter in count) {
        if(count[letter] % 2 != 0)
            odd_count++;
    }

    if(odd_count > 1) 
        return false;
    return true;

    // Using array
    // let count = new Array(256).fill(0);
    // let odd_count = 0;
    // for(let i = 0;i < 256;i++) {
    //     if(count[i] % 2 != 0)
    //         odd_count++;
    // }
    // if(odd_count > 1)
    //     return false;
    // return true;
}

console.log(isPermutationPalindrome('aabbcc'))
console.log(isPermutationPalindrome('hello'))
console.log(isPermutationPalindrome('Aab'))