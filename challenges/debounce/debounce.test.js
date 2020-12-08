const { debounce, debounce2 } = require('./debounce');
// tell jest to mock all timeout functions
jest.useFakeTimers();

describe('debounce', () => {
  let func = jest.Mock;
  let debouncedFunc = Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test('execute just once', () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});

describe('debounce2', () => {
  let func = jest.Mock;
  let debouncedFunc = Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce2(func, 1000);
  });

  test('execute just once', () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
