const recursiveStrings = require('./recursiveStrings');

describe('recursiveStrings Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'cat',
      output: new Set(['tac', 'atc', 'act', 'tca', 'cta', 'cat']),
    };
    const result = recursiveStrings(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 'cats',
      output: new Set([
        'acst',
        'acts',
        'asct',
        'astc',
        'atcs',
        'atsc',
        'cast',
        'cats',
        'csat',
        'csta',
        'ctas',
        'ctsa',
        'sact',
        'satc',
        'scat',
        'scta',
        'stac',
        'stca',
        'tacs',
        'tasc',
        'tcas',
        'tcsa',
        'tsac',
        'tsca']),
    };
    const result = recursiveStrings(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
