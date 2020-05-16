// O(n^2)
function stockProfit(stockPrices) {
  // looking for biggest gap between early price and late prices
  let largestPossibleProfit = 0;
  for (let i = 0; i < stockPrices.length; i++) {
    const earlierPrice = stockPrices[i];
    for (let j = i + 1; j < stockPrices.length; j++) {
      const laterPrice = stockPrices[j];
      const currentProfitPotential = (laterPrice - earlierPrice);
      largestPossibleProfit = currentProfitPotential > largestPossibleProfit
        ? currentProfitPotential
        : largestPossibleProfit;
    }
  }
  return largestPossibleProfit;
}

function stockProfit1(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  let maxProfit = stockPrices[1] - stockPrices[0];
  let lowestPrice = stockPrices[0];
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const currentProfitPotential = (currentPrice - lowestPrice);
    lowestPrice = Math.min(lowestPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentProfitPotential);
  }
  return maxProfit;
}

module.exports = { stockProfit1, stockProfit };
