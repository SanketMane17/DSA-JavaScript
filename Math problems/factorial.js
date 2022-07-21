let fact = 1;

function factorial(num) {
    if(num == 0) {
        return 1;
    }

    for(let i = num;i > 0;i--) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));
