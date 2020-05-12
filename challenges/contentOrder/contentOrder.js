// nextArticle is article we're looking at next
// previousArticle is already in potentialOrder
function isPostReqCheck(nextArticle, previousArticle, articlePrereqs) {
  let isPostReq = false;
  if (articlePrereqs[nextArticle].includes(previousArticle)) {
    isPostReq = true;
  }
  return isPostReq;
}

function isPrereqCheck(nextArticle, previousArticle, articlePrereqs) {
  let isPrereq = false;
  if (articlePrereqs[previousArticle].includes(nextArticle)) {
    isPrereq = true;
  }
  return isPrereq;
}

function noPreReqCheck(previousArticle, articlePrereqs) {
  let noPreReqs = false;
  if (articlePrereqs[previousArticle].length === 0) {
    noPreReqs = true;
  }
  return noPreReqs;
}

function noPreReqBothCheck(nextArticle, previousArticle, articlePrereqs) {
  let noPreReqs = false;
  if (articlePrereqs[nextArticle].length === 0 && articlePrereqs[previousArticle].length === 0) {
    noPreReqs = true;
  }
  return noPreReqs;
}

// function determinePreOrPostReqIndex(nextArticle, previousArticle, articlePrereqs) {
//   let indexShift = 0;
//   console.log('nextArticleArg');
//   console.log(nextArticle);
//   console.log('previousArticle');
//   console.log(previousArticle);
//   // nextArticle is preReq
//   if (articlePrereqs[previousArticle].includes(nextArticle)) {
//     console.log('// nextArticle is preReq');
//     indexShift = 0;
//   } else if (articlePrereqs[nextArticle].includes(previousArticle)) {
//     /* nextArticle is postReq */
//     console.log('// nextArticle is postReq');
//     indexShift = 1;
//   }
//   console.log(`AFTERSWITCH ${indexShift}`);
//   return indexShift;
// }

// ////////////////

// linked list?
// bubble sort
function contentOrder(articleListArg, articlePrerequisites) {
  const articleList = articleListArg;
  /* initialize potentialOrder with first element */
  const potentialOrder = [articleList.shift()];
  for (let i = 0; i < potentialOrder.length; i++) {
    const previousArticle = potentialOrder[i];
    for (let j = 0; j < articleList.length; j++) {
      const nextArticle = articleList[j];
      if (isPostReqCheck(nextArticle, previousArticle, articlePrerequisites)
        || noPreReqBothCheck(nextArticle, previousArticle, articlePrerequisites)
      ) {
        const removedArticle = articleList.splice(j, 1)[0];
        potentialOrder.splice(i + 1, 0, removedArticle);
        i += 1;
      }
    }
  }

  return potentialOrder;
}

module.exports = {
  contentOrder, isPrereqCheck, noPreReqCheck, isPostReqCheck, noPreReqBothCheck,
};
