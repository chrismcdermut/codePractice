/* eslint-disable no-console */

const {
  javaScriptPractice, inspireFear, turnOn, turnOnNewObject,
} = require('./javaScriptPractice');

describe('javaScriptPractice Hoisting Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    javaScriptPractice();
    // The first argument of the first call to the function was 'hello'
    const answer = undefined;
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});

describe('javaScriptPractice Test', () => {
  const threatLevel = 1;

  test('testOne', () => {
    console.log = jest.fn();
    inspireFear(threatLevel);
    console.log(threatLevel); // Whoops! It's still 1!

    const answer = 1;
    expect(console.log).toHaveBeenCalledWith(answer);
  });

  describe('javaScriptPractice Test', () => {
    test('testOne', () => {
      const computer = {
        isOn: false,
      };
      console.log = jest.fn();
      turnOn(computer);
      console.log(computer.isOn); // true;
      const answer = true;
      expect(console.log).toHaveBeenCalledWith(answer);
    });

    test('testTwo', () => {
      const computer = {
        isOn: false,
      };
      console.log = jest.fn();
      turnOnNewObject(computer);
      console.log(computer.isOn); // true;
      const answer = false;
      expect(console.log).toHaveBeenCalledWith(answer);
    });
  });
});
