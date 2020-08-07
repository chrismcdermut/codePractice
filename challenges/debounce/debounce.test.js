const runDebounce = require('./debounce');

describe('runDebounce Test', () => {
  xtest('testOne WILL FAIL', () => {
    expect(() => {
      runDebounce();
    }).toEqual();
  });
});
