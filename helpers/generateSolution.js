/* eslint-disable */
// TODO: enable linting

const fs = require('fs');

const directory = 'challenges';
const solutionName = 'contentOrder';

const spec = `${solutionName} Spec go here!`;
const notes = `${solutionName} Notes go here!`;
const solutionJS = `function ${solutionName}(input) {

}

module.exports = ${solutionName}
`;
const solutionTestJS = `const ${solutionName} = require('./${solutionName}')

const testOne = {
  input: '',
  output: ''
}

describe('${solutionName} Test', () => {

  test('testOne', ()=>{
    let result = ${solutionName}(testOne.input)
    expect(result).toEqual(testOne.output);
  })

})
`;

module.exports.generateDefaultSolution = function () {
  // make folder with solution name
  // Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
  fs.mkdir(`./${directory}/${solutionName}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  // make spec.md file -> //make ${solution}Spec.md file
  fs.writeFile(
    `./${directory}/${solutionName}/${solutionName}Spec.md`,
    spec,
    (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}Spec.md saved!`);
    },
  );

  // make notes.md file -> //make ${solution}notes.md file
  fs.writeFile(
    `./${directory}/${solutionName}/${solutionName}Notes.md`,
    notes,
    (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}notes.md saved!`);
    },
  );

  // make solution.js file -> //make ${solution}solution.js file
  fs.writeFile(
    `./${directory}/${solutionName}/${solutionName}.js`,
    solutionJS,
    (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}.js saved!`);
    },
  );

  // make solution.test.js file -> //make ${solution}solution.test.js file
  fs.writeFile(
    `./${directory}/${solutionName}/${solutionName}.test.js`,
    solutionTestJS,
    (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}.test.js saved!`);
    },
  );
};
