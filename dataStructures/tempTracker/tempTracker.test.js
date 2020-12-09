const TempTracker = require('./TempTracker');

describe('tempTracker Test', () => {
  const initialTempTracker = new TempTracker();
  const initialTemps = [65, 72, 94, 75, 75, 75, 55, 83, 83];
  initialTemps.forEach((item) => {
    initialTempTracker.insert(item);
  });

  test('testOne numberOfReadings', () => {
    const numOfReadsResult = initialTempTracker.numberOfReadings;
    const numOfReadsAnswer = initialTemps.length;
    expect(numOfReadsResult).toEqual(numOfReadsAnswer);
  });

  test('testTwo totalSum', () => {
    const totalSumResult = initialTempTracker.totalSum;
    const totalSumAnswer = initialTemps.reduce((a, b) => a + b, 0);
    expect(totalSumResult).toEqual(totalSumAnswer);
  });

  test('testThree mean', () => {
    const meanResult = initialTempTracker.getMean();
    const meanAnswer = (initialTemps.reduce((a, b) => a + b, 0) / initialTemps.length);
    expect(meanResult).toEqual(meanAnswer);
  });

  test('testFour mode', () => {
    const modeResult = initialTempTracker.getMode();
    const modeAnswer = 75;
    expect(modeResult).toEqual(modeAnswer);
  });

  test('testFive Min', () => {
    const minResult = initialTempTracker.getMin();
    const minAnswer = 55;
    expect(minResult).toEqual(minAnswer);
  });

  test('testFive Max', () => {
    const maxResult = initialTempTracker.getMax();
    const maxAnswer = 94;
    expect(maxResult).toEqual(maxAnswer);
  });
});
