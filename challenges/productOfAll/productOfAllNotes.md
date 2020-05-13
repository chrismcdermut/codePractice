productOfAll Notes go here!

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

////Can this be functional?

function productOfAllCleanestFunctional(input) {
  // let allProducts = [];

  let priorProduct = 1;

  // for (let i = 0; i < input.length; i++) {
  //   const priorElement = input[i - 1] ? input[i - 1] : 1;
  //   priorProduct *= priorElement;
  //   allProducts[i] = (priorProduct);
  // }

  const allProducts = input.map((element) => {
    priorProduct
    element *= priorProduct;
  });

  priorProduct = 1;
  for (let i = input.length - 1; i > -1; i--) {
    const priorElement = input[i + 1] ? input[i + 1] : 1;
    priorProduct *= priorElement;
    allProducts[i] *= (priorProduct);
  }

  return allProducts;
}
