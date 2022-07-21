// Without using inbuilt functions like split()
// i/p = the quick Brown fox jumps over the Lazy dog.

// o/p = The Quick Brown Fox Jumps Over The Lazy Dob.

function capitalise(ch) {
    let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    return String.fromCharCode(ch.charCodeAt(0) - diff);
}

function isSmallCase(ch) {
    if('a'.charCodeAt(0) <= ch.charCodeAt(0) && 'z'.charCodeAt(0) >= ch.charCodeAt(0)) {
        return true;
    }
    return false;
}

function capFirstLetter(str){
    let ans = "";

    for(let i = 0;i < str.length;i++) {
        if(i == 0 && isSmallCase(str[i])) {
            ans += capitalise(str[i]);
            continue; // for directly jump to next iteration
        }

        if(i > 0 && str[i-1] == " " && isSmallCase(str[i])) {
            ans += capitalise(str[i]);
            continue; // for directly jump to next iteration
        }

        ans += str[i];
    }

    return ans;
}

let result = capFirstLetter("the quick Brown fox jumps over the Lazy dog.");

console.log(result);