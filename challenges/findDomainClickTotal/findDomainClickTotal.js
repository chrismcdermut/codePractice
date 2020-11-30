function findDomainClickTotal(countsInput) {
  const finalCountTally = {

  };

  countsInput.forEach((countInfo) => {
    // first split the number
    // then split the string
    const splitInfo = countInfo.split(',');
    const clickCount = splitInfo[0];
    const clickedDomain = splitInfo[1];
    const splitClickedDomain = clickedDomain.split('.');

    // THIS IS LESS BEAUTIFUL RIGHT HERE - PULL THIS OUT INTO COMPONENT FUNCTION
    for (let i = splitClickedDomain.length - 1; i > 0; i--) {
      // construct current domain
      //      let currentDomain = splitClickedDomain[i]
      let currentDomain = '';

      // the problem is here
      for (let j = i; j < splitClickedDomain.length; j++) {
        const delimeter = j >= splitClickedDomain.length - 1 ? '.' : '';
        currentDomain += delimeter + splitClickedDomain[j];
      }

      if (!finalCountTally[currentDomain]) {
        console.log('currentDomain');
        console.log(currentDomain);
        console.log('clickCount');
        console.log(clickCount);
        finalCountTally[currentDomain] = clickCount;
        console.log('current finalCountTally');
        console.log(finalCountTally);
      } else {
        finalCountTally[currentDomain] += clickCount;
        console.log('currentDomain');
        console.log(currentDomain);
        console.log('clickCount');
        console.log(clickCount);
        finalCountTally[currentDomain] = clickCount;
        console.log('current finalCountTally');
        console.log(finalCountTally);
      }
    }
  });

  console.log('finalCountTally');
  console.log(finalCountTally);
  return finalCountTally;
}

module.exports = findDomainClickTotal;
