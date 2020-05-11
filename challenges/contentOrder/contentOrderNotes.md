//contentis important
// coach is sellingpoint

//////Notes///////
    //if potentialOrder last element is prereq than add after, if it is post req, add before,
//     if(potentialOrder[potentialOrder.length-1]){


//     }

///////
// function isPrereq(nextArticle, previousArticle, articlePrereqs) {
//   let isPrequisite = false;
//   if (articlePrereqs[previousArticle].includes(nextArticle)) {
//     isPrequisite = true;
//   }
//   return isPrequisite;
// }


//////Iteration6/////////
function contentOrder(articleListArg, articlePrerequisites) {
  const articleList = articleListArg;
  // const potentialOrder = [];
  for (let i = (articleList.length - 1); i > -1; i--) {
    const nextArticle = articleList.splice(i, 1)[0];
    // console.log('nextArticle');
    // console.log(nextArticle);
    console.log('i outer loop');
    console.log(i);
    console.log('articleList outer loop');
    console.log(articleList);
    for (let j = i - 1; j > -1; j--) {
      const currentArticle = articleList[j];
      console.log('j inside loop');
      console.log(j);
      // console.log('currentArticle');
      // console.log(currentArticle);
      // if next article is preReq put it in front and start over
      if (isPrereqCheck(nextArticle, currentArticle, articlePrerequisites)) {
        articleList.splice(j, 0, nextArticle);
        // potentialOrder.splice(j, 0, nextArticle);
        console.log('articleList inside loop');
        console.log(articleList);
        // console.log('potentialOrder inside loop');
        // console.log(potentialOrder);
      }
    }
  }
  // console.log('articleList before return');
  // console.log(articleList);
  // console.log('potentialOrder before return');
  // console.log(potentialOrder);
  return articleList;
}


///////////////Iteration5/////////////
function contentOrder(articleListArg, articlePrerequisites) {
  const articleList = articleListArg;
  const potentialOrder = [articleList.shift()]; /* initialize potentialOrder with first element */

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

///////////Iteration4/////////////////
// function contentOrder(articleListArg, articlePrerequisites) {
//   let articleList = articleListArg;
//   let potentialOrder = [articleList.shift()]; /* initialize potentialOrder with first element */
//
//   while (articleList.length) {
//     // let nextArticle = articleList[0];
//     // let removedArticle = articleList.splice(0, 1)[0];
//     let nextArticle = articleList.splice(0, 1)[0];
//     let previousArticle = potentialOrder[0];
//
//     //if the next article is a prereq or the previous article has no prereq
//     //add the next article ot beginning of potentialOrder
//     if (noPreReqCheck(previousArticle, articlePrerequisites)
//         || isPrereqCheck(nextArticle, previousArticle, articlePrerequisites)) {
//       potentialOrder.splice(0, 0, nextArticle);
//     }
//   }
//
//   console.log('potentialOrder');
//   console.log(potentialOrder);
//   return potentialOrder;
// }

///////////Iteration3/////////////////
// while (articleList.length > 0) {
// // for (let i = 0; i < articleList.length; i++) { /* find prereq */
//   console.log('articleList BEFORE chek');
//   console.log(articleList);
//   // console.log('articleList i');
//   // console.log(i);
//   const nextArticle = articleList[0];
//   console.log('nextArticle');
//   console.log(nextArticle);
//   const previousArticle = potentialOrder[0];
//   if (noPreReqCheck(previousArticle, articlePrerequisites)
//     || isPrereqCheck(nextArticle, previousArticle, articlePrerequisites)) {
//     const removedArticle = articleList.splice(0, 1)[0];
//     potentialOrder.splice(0, 0, removedArticle);
//     // after putting the article in, restart and look at
//     // i = 0;
//     // console.log(`Right after setting i to :${i}`);
//     // continue;
//   }
//   console.log('articleList AFTER chek');
//   console.log(articleList);
// // }
// }

// //////Iteration 2////////

// function contentOrder(articleList, articlePrerequisites) {
//   const potentialOrder = [articleList.shift()];
//
//   while(articleList.length) {
//     // const nextArticle = articleList.shift();
//     const nextArticle = articleList[0];
//     for(let i=(articleList.length-1);i>0;i--){
//       const previousArticle = potentialOrder[0];
//
//       if (isPrereqCheck(nextArticle, previousArticle, articlePrerequisites)) {
//         console.log('nextArticle');
//         console.log(nextArticle);
//         potentialOrder.splice(i, 0, articleList.shift());
//         continue;
//       }
//       // potentialOrder.splice((i + 1), 0, nextArticle);
//       continue
//     }
//   }
//
//   console.log('potentialOrder')
//   console.log(potentialOrder)
//   return potentialOrder;
// }

// //////Iteration 1////////

// function contentOrder(articleList, articlePrerequisites) {
//   const potentialOrder = [articleList.shift()];
//
//   // look at article list, put article item in potential order
//   // if the article meets order condition
//   for (let i = 0; i < articleList.length; i++) {
//     const nextArticle = articleList[i];
//     const previousArticle = potentialOrder[potentialOrder.length - 1];
//
//     for (let j = 0; j < potentialOrder.length; j++) {
//       // if next article is prequisite, add to before, else add after
//       if (isPrereqCheck(nextArticle, previousArticle, articlePrerequisites)) {
//         console.log('nextArticle');
//         console.log(nextArticle);
//         potentialOrder.splice(j, 0, nextArticle);
//         // continue;
//       } else {
//         potentialOrder.splice((j + 1), 0, nextArticle);
//       }
//     }
//   }
//   console.log('potentialOrder');
//   console.log(potentialOrder);
//   return potentialOrder;
// }
