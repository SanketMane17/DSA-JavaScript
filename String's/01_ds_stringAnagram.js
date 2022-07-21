function isAnagram(str1, str2) {
   
    if(str1.length !== str2.length)    
        return false;

    let counter = {};
    for(let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        // console.log(counter[letter]);
    }

    console.log(counter);

    for(let item of str2) {
        if(!counter[item])
            return false;
        
        counter[item]--;
    }
    return true;
}

const ouput = isAnagram("hello", "llheo");
console.log(ouput);

// Time complexity = O(n)
