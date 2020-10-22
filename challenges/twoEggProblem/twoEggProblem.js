const { quadSolver } = require('quadratic-solver');

function twoEggProblem(numberOfFloors) {
  const rootsArr = quadSolver(1, 1, -2 * numberOfFloors);
  console.log('rootsArr');
  console.log(rootsArr);
  const roundedNum = Math.round(rootsArr[0]);
  return roundedNum;
}

module.exports = twoEggProblem;
