function findQuadrant(x, y) {

    let res;

    if (x > 0 && y > 0)
        res = 1;
    else if (x < 0 && y > 0)
        res = 2;
    else if (x < 0 && y < 0)
        res = 3;
    else if (x > 0 && y < 0)
        res = 4;

    return res;
}

console.log(findQuadrant(-5.5, 2));
console.log(findQuadrant(1, -1));