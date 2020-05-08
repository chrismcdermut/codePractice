function isPrereq(nextArticle, previousArticle, articlePrereqs) {
  let isPrequisite = false;
  if (articlePrereqs[previousArticle].includes(nextArticle)) {
    isPrequisite = true;
  }
  return isPrequisite;
}

// make sure where it is put
function contentOrder(articleList, articlePrerequisites) {
  const potentialOrder = [];

  // look at article list, put article item in potential order if the article meets order condition
  for (let i = 0; i < articleList.length; i++) {
    const currentArticle = articleList[i];
    // last article in finalList
    const previousArticle = potentialOrder[potentialOrder.length - 1];
    // if potentialOrder is empty, initialize
    if (i === 0) {
      potentialOrder.push(articleList.shift());
      continue;
    }

    // if next article is prequisite, add to before, else add after
    if (isPrereq(currentArticle, previousArticle, articlePrerequisites)) {
      // add before
      console.log('currentArticle');
      console.log(currentArticle);
      potentialOrder.splice(potentialOrder.length, 0, currentArticle);
    } else {
      potentialOrder.push(currentArticle);
    }
  }
  // return ["C","D","B","A"] //true
  // return ["C","D","H","T"] //false
  return potentialOrder;
}

module.exports = contentOrder;
