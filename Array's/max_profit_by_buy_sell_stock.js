// i/p - [7, 1, 5, 3, 6]
// possible configuration
//   1 -> 5,      3 -> 4    = 4 + 1 = 5
// (buy)(sell)  (buy)(sell)
//   1 -> 5,      3 -> 6    = 4 + 3 = 7
// (buy)(sell)  (buy)(sell)
// output = 7

// i/p - [5, 3]
// no possible configuration
// ouput = 0


function findMaxProfit(prices) {

    let buyingPrice = prices[0], profit = 0;

    for(let i = 1;i < prices.length;i++) {
        if(prices[i] < buyingPrice) {
            buyingPrice = prices[i];
        } else {
            profit += (prices[i] - buyingPrice);
            buyingPrice = prices[i];
        }
    }
    return profit;
}

let prices = [7, 1, 5, 3, 6];
console.log(findMaxProfit(prices))


