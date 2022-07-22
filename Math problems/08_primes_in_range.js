
function isPrime(n) {

    for(let i = 2;i <= Math.floor(Math.sqrt(n));i++) {
        if(n % i == 0)
            return false;
    }
    return true;
}

function numberOfPrimesInARange(l, r) {

    let cnt = 0;
    for(let i = 2;i <= r;i++) {
        if(isPrime(i)) {
            cnt++;
        }
    }
    return cnt;
}

console.log(numberOfPrimesInARange(1, 100));
