// function factorial(num) {
//     let fact = 1;
//     if(num == 0) {
//         return 1;
//     }

//     for(let i = num;i > 0;i--) {
//         fact = fact * i;
//     }
//     return fact;
// }

// By using recursion

function factorial(num) {
    if(num == 0 || num == 1) 
        return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));
