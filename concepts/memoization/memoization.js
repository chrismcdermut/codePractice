class Memoization {
  constructor() {
    this.memo = {};
  }

  fib(n) {
    if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');

    // Base cases
    } else if (n === 0 || n === 1) {
      return n;
    }

    // See if we've already calculated this
    if (Object.prototype.hasOwnProperty.call(this.memo, n)) {
      // console.log(`grabbing memo[${n}]`);
      return this.memo[n];
    }

    // console.log(`computing fib(${n})`);
    const result = this.fib(n - 1) + this.fib(n - 2);

    // Memoize
    this.memo[n] = result;

    return result;
  }
}

module.exports = { Memoization };
