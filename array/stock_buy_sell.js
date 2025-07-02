function buy_sell_stocks(prices) {
  let maxProfit = 0;
  let bestBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
    }
    bestBuy = Math.min(bestBuy, prices[i]);
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
buy_sell_stocks(prices);
