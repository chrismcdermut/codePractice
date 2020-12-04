function findFibonacci(input) {
  const n = input;

  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    // TODO: remove this return
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

module.exports = findFibonacci;
