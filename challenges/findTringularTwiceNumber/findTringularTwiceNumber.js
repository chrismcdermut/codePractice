function findTringularTwiceNumber(numbers) {
  if (numbers.length < 2) {
    throw new Error('Finding duplicate requires at least two numbers');
  }

  const n = numbers.length - 1; // subtract one b/c there is duplicate
  const sumWithoutDuplicate = (n * n + n) / 2;
  const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);

  return actualSum - sumWithoutDuplicate;
}

module.exports = findTringularTwiceNumber;
