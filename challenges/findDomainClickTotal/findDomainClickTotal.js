function findDomainClickTotal(countsInput) {
  const finalCountTally = {};

  countsInput.forEach((countInfo) => {
    // first split the number
    // then split the string
    const splitInfo = countInfo.split(',');
    const clickCount = parseInt(splitInfo[0], 10);
    const clickedDomain = splitInfo[1];
    const splitClickedDomain = clickedDomain.split('.');

    splitClickedDomain.forEach((item, i) => {
      const currentDomain = splitClickedDomain.slice(i).join('.');
      if (!finalCountTally[currentDomain]) {
        finalCountTally[currentDomain] = clickCount;
      } else {
        finalCountTally[currentDomain] += clickCount;
      }
    });
  });
  return finalCountTally;
}

module.exports = findDomainClickTotal;
