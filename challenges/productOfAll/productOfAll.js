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

function productOfAllOthersBest(input) {
  const allProductResults = [];
  const arrayOfProductsBefore = [];
  const arrayOfProductsAfter = [];
  let productBefore = 1;
  let productAfter = 1;

  for (let i = 0; i < input.length; i++) {
    const priorElement = input[i - 1] ? input[i - 1] : 1;
    productBefore *= priorElement;
    arrayOfProductsBefore.push(productBefore);
  }

  for (let i = input.length - 1; i > -1; i--) {
    const priorElement = input[i + 1] ? input[i + 1] : 1;
    productAfter *= priorElement;
    arrayOfProductsAfter.unshift(productAfter);
  }

  for (let i = 0; i < arrayOfProductsBefore.length; i++) {
    allProductResults.push(arrayOfProductsBefore[i] * arrayOfProductsAfter[i]);
  }

  return allProductResults;
}

function productOfAllCleanest(input) {
  const allProducts = [];

  let cumulativeProduct = 1;
  for (let i = 0; i < input.length; i++) {
    allProducts[i] = cumulativeProduct;
    cumulativeProduct *= input[i];
  }

  cumulativeProduct = 1;
  for (let j = input.length - 1; j > -1; j--) {
    allProducts[j] *= cumulativeProduct;
    cumulativeProduct *= input[j];
  }

  return allProducts;
}

module.exports = {
  productOfAllOthers, productOfAllOthersBest, productOfAllCleanest,
};
