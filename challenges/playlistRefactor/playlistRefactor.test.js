const playlistRefactor = require('./playlistRefactor');

describe('playlistRefactor Test', () => {
  test('testOne', () => {
    const testOne = {
      commands:
      ['add',
        'play',
        'get',
        'add',
        'play',
        'play',
        'get',
        'play',
        'get'],
      names:
      ['I Still Miss Someone',
        'I Still Miss Someone',
        '',
        'Toxicity',
        'I Still Miss Someone',
        'I Still Miss Someone',
        '',
        'I Still Miss Someone',
        ''],
      parameters: [1, 751, 0, 584, 1, 824, 0, 220, 0],
      Output:
      ['[Track(name = I Still Miss Someone, duration = 1, pausedOn = 750)]',
        '[Track(name = I Still Miss Someone, duration = 1, pausedOn = 1573), Track(name = Toxicity, duration = 584, pausedOn = 0)]',
        '[Track(name = I Still Miss Someone, duration = 1, pausedOn = 1792), Track(name = Toxicity, duration = 584, pausedOn = 0)]'],
      ExpectedOutput:
      ['[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0)]',
        '[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]',
        '[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]'],
      ConsoleOutput: [
        'PLAY CALLED FOR TIME',
        '751',
        'PLAY CALLED FOR TIME',
        '1',
        'PLAY CALLED FOR TIME',
        '824',
        'PLAY CALLED FOR TIME',
        '220',
      ],
    };
    const result = playlistRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testOne', () => {
    const testOne = {
      commands:
      ['add',
        'add',
        'add',
        'add',
        'get',
        'move',
        'get',
        'move',
        'get',
        'add',
        'add',
        'get',
        'move',
        'get',
        'move',
        'get'],
      names:
      ['"Long Gone(From the Bowlin Green)"',
        'Symphony #9 in D minor("Choral"),Op. 125',
        'I Walk the Line',
        'Jackie Cane',
        '',
        'Symphony #9 in D minor("Choral"),Op. 125',
        '',
        'I Walk the Line',
        '',
        'OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo',
        'Toxicity',
        '',
        'Toxicity',
        '',
        'Toxicity',
        ''],
      parameters: [1, 509, 1, 568, 0, 0, 0, 2, 0, 1, 1000, 0, 3, 0, 2, 0],
      Output:
      ['[Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]'],
      ExpectedOutput:
      ['[Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]',
        '[Track(name = Symphony #9 in D minor("Choral"),Op. 125, duration = 509, pausedOn = 0), Track(name = "Long Gone(From the Bowlin Green)", duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]'],
      ConsoleOutput: /* Empty */
      [],
    };
    const result = playlistRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
