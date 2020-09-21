const { slowFindDuplicateFiles, optimizedFindDuplicateFiles } = require('./findDuplicateFiles');

describe('slowFindDuplicateFiles Test', () => {
  test('testOne duplicates', () => {
    const cwd = process.cwd();
    const analyzeDuplicateFileDirectory = `${cwd}/challenges/findDuplicateFiles/duplicateFiles`;
    const result = slowFindDuplicateFiles(analyzeDuplicateFileDirectory);
    const answer = [[`${cwd}/challenges/findDuplicateFiles/duplicateFiles/file2.txt`,
      `${cwd}/challenges/findDuplicateFiles/duplicateFiles/file1.txt`]];
    expect(result).toEqual(answer);
  });

  test('testTwo no duplicates', () => {
    const cwd = process.cwd();
    const analyzeNoDuplicateFileDirectory = `${cwd}/challenges/findDuplicateFiles/noDuplicateFiles`;
    const result = slowFindDuplicateFiles(analyzeNoDuplicateFileDirectory);
    const answer = [];
    expect(result).toEqual(answer);
  });
});

describe('optimizedFindDuplicateFiles Test', () => {
  test('testOne duplicates', () => {
    const cwd = process.cwd();
    const analyzeDuplicateFileDirectory = `${cwd}/challenges/findDuplicateFiles/duplicateFiles`;
    const result = optimizedFindDuplicateFiles(analyzeDuplicateFileDirectory);
    const answer = [[`${cwd}/challenges/findDuplicateFiles/duplicateFiles/file2.txt`,
      `${cwd}/challenges/findDuplicateFiles/duplicateFiles/file1.txt`]];
    expect(result).toEqual(answer);
  });

  test('testOne no duplicates', () => {
    const cwd = process.cwd();
    const analyzeNoDuplicateFileDirectory = `${cwd}/challenges/findDuplicateFiles/noDuplicateFiles`;
    const result = optimizedFindDuplicateFiles(analyzeNoDuplicateFileDirectory);
    const answer = [];
    expect(result).toEqual(answer);
  });
});
