function evenOdd(num) {
    if(num & 1) // if it's 1 then it is odd number
        return "Odd";
    return "Even";
}

console.log(evenOdd(112));