function productOfAll(input) {
  const productResults = [];
  const productBefore = 1;
  const productAfter = 1;
  for (let i = 0; i < input.length; i++) {
    productResults.push(productBefore * productAfter);
  }
}

module.exports = productOfAll;
