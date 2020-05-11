// nextArticle = nextArticle we're checking
function isPostReq(nextArticle, previousArticle, articlePrereqs) {
  let isPrequisite = false;
  if (articlePrereqs[previousArticle].includes(nextArticle)) {
    isPrequisite = true;
  }
  return isPrequisite;
}

// nextArticle = nextArticle we're checking
function isPrereqCheck(nextArticle, previousArticle, articlePrereqs) {
  let isPrereq = false;
  if (articlePrereqs[previousArticle].includes(nextArticle)) {
    isPrereq = true;
  }
  return isPrereq;
}

// nextArticle = nextArticle we're checking
function noPreReqCheck(previousArticle, articlePrereqs) {
  let noPreReqs = false;
  if (articlePrereqs[previousArticle].length === 0) {
    noPreReqs = true;
  }
  return noPreReqs;
}

function contentOrder(articleListArg, articlePrerequisites) {
  const articleList = articleListArg;
  const potentialOrder = [articleList.shift()]; /* initialize potentialOrder
  with first element */

  while (articleList.length) {
    const nextArticle = articleList.splice(0, 1)[0];
    const previousArticle = potentialOrder[0];

    /* if the next article is a prereq or the previous article has no prereq
     add the next article ot beginning of potentialOrder */
    if (noPreReqCheck(previousArticle, articlePrerequisites)
        || isPrereqCheck(nextArticle, previousArticle, articlePrerequisites)) {
      potentialOrder.splice(0, 0, nextArticle);
    }
  }

  return potentialOrder;
}

// linked list?
// bubble sort


module.exports = {
  contentOrder, isPrereqCheck, noPreReqCheck, isPostReq,
};
