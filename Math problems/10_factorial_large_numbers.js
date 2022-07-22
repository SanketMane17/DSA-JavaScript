
// constraints = 1 <= n <= 1000 ie. 10^3
// which gives you the large factorial number 
// so, we have to store it on array of size 500

function factorialLarge(n) {

    // Create an array of size of 500
    let ans = [];
    ans.push(1);

    for(let x = 2;x <= n;x++) {
        
        let carry = 0;
        for(let i = 0;i < ans.length;i++) {
            let currentProd = ans[i] * x + carry;
            ans[i] = currentProd % 10;
            // console.log(i , ans[i]);
            carry = Math.floor(currentProd / 10);
        }

        while(carry != 0) {
            ans.push(carry % 10);
            console.log(ans);
            carry = Math.floor(carry / 10)
        }
    }

    console.log(ans);
}

let n = 5;
factorialLarge(n);