
function isTwo(s) {
    for(let i = 0;i < s.length;i++) {
        if(s[i] == 2)
            return true;
    }
    return false;
}

function countTwos(s) {
    let cnt = 0;
    for(let i = 0;i < s.length;i++) {
        if(s[i] == 2) 
            cnt++;
    }
    return cnt;
}

function countOfTwos(n) {
    let cnt = 0;
    for(let i = 2;i <= n;i++) {
        if(isTwo(String(i))) { 
            cnt += countTwos(String(i));     
        }
    }

    return cnt;
}

console.log(countOfTwos(22));