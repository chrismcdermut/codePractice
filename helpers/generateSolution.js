// writefile.js
const fs = require('fs');

const solutionName = 'solutionName'

let spec = `${solutionName} Spec go here!`;
let notes = `${solutionName} Notes go here!`;
let solutionJS = `function ${solutionName}(input) {

}

module.exports = ${solutionName}
`;
let solutionTestJS = `const ${solutionName} = require('./${solutionName}')

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
`

//make folder with solution name
//make notes.md file -> //make ${solution}notes.md file
//make spec.md file -> //make ${solution}Spec.md file
//make solution.js file -> //make ${solution}solution.js file
//make solution.test.js file -> //make ${solution}solution.test.js file
module.exports.generateDefaultSolution = function() {

  // Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
  fs.mkdir(`./challenges/${solutionName}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./challenges/${solutionName}/${solutionName}Spec.md`, spec, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log('Spec.md saved!');
  });

  fs.writeFile(`./challenges/${solutionName}/${solutionName}notes.md`, notes, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log('notes.md saved!');
  });

  fs.writeFile(`./challenges/${solutionName}/${solutionName}Solution.js`, solutionJS, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}Solution.js saved!`);
  });

  fs.writeFile(`./challenges/${solutionName}/${solutionName}Solution.test.js`, solutionTestJS, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`${solutionName}Solution.test.js saved!`);
  });

}
