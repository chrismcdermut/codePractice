function productReducer(accumulator, currentValue) {
  return accumulator * currentValue;
}

function productOfAllOthers(input) {
  const productResults = [];
  let productBefore = 1;
  let productAfter = 1;
  for (let i = 0; i < input.length; i++) {
    const priorElement = input[i - 1] ? input[i - 1] : 1;
    productBefore *= priorElement;

    if (i + 1 < input.length) {
      const leftOverArray = input.slice(i + 1);
      productAfter = leftOverArray.reduce(productReducer);
    }

    productResults.push(productBefore * productAfter);
    productAfter = 1;
  }
  return productResults;
}

module.exports = productOfAllOthers;
