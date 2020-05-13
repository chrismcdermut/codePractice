function productOfAll(input) {
  let productResults = []
  let productBefore = 1
  let productAfter = 1
  for(let i=0;i<input.length;i++){



    productResults.push(productBefore*productAfter)
  }
}

module.exports = productOfAll
