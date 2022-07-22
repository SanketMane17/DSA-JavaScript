// i/p - a, b, m
// a^b mod m => handling big numbers

function modularExponentiation(a, b) {
    let m = 1e9+7;

    var res = 1;
    while(b > 0) {
        if(b % 2 == 1) {
            res = (res * (a%m)) % m;
        }

        b = Math.floor(b / 2);
        a = ((a%m) * (a%m)) % m;
    }
    return res;
}

var a = 2, b = 5;
console.log(modularExponentiation(2, 100)); // 