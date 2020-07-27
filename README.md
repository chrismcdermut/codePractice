# Code Practice

codePractice is a consortium of practice functions for algorithms, data structures, code challenges, and interview questions collected from errr'where I come across them. I may not get them first time around, then I swing back through add tests, do research and make sure I'm understanding the problems.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

### boilerPlate
Go into `helpers/generateBoilerPlate` and change the Name and code type to an appropriate choice in the top of the file
```node
// ////SETUP HERE//////
const solutionName = 'makingChange';
// TODO: look into setting up map or enum for this
/* challenge || dataStructure || algorithm || designPattern || concept */
const codeChallengeType = 'challenge';
```

```node
npm run generateBoilerPlate
```

### linting
```node
npm run pretest -- --fix
```

### running tests
```node
npm run test
```

## Content

### Algorithms

- 1. [ ] binarySearch - Binary Search Algorith
- 1. [x] bubbleSort - Bubble Sort Algorithm
- 1. [x] heapSort - Heap Sort Algorithm
- 1. [x] insertionSort - Insertion Sort Algorithm
- 1. [x] mergeSort - Merge Sort Algorithm
- 1. [x] quickSort - Quick Sort Algorithm
- 1. [x] selectionSort - Selection Sort Algorithm

### Challenges

- 1. [ ] arrayJumping
- 1. [x] arrayRotateLeft
- 1. [x] binaryTreeSum
- 1. [x] default
- 1. [x] findDuplicateInLL
- 1. [x] findFibonacci
- 1. [x] findLongestWord
- 1. [x] findShortestRoute
- 1. [x] graphColoring
- 1. [x] highestScores
- 1. [x] isValidBTreeCheck
- 1. [x] makingChange
- 1. [x] mergeArray
- 1. [x] mergeArrays
- 1. [x] mergeMeetingTimes
- 1. [x] missingArrayElement
- 1. [x] missingInteger
- 1. [ ] orderChecker
- 1. [x] palindrome
- 1. [x] permutationPalindrome
- 1. [x] productOfAll
- 1. [x] productOfThree
- 1. [x] recursiveStrings
- 1. [x] reverseArrayInPlace
- 1. [x] reverseString
- 1. [x] reverseWords
- 1. [ ] rotationPoint
- 1. [x] sandBox
- 1. [x] secondLargestBTreeItem
- 1. [ ] shortestString
- 1. [x] shuffleArray
- 1. [x] stockProfit
- 1. [x] strings
- 1. [x] superBalancedTreeCheck
- 1. [x] switchObjectKey
- 1. [x] wordCloud

### Concepts

- 1. [x] memoization


### Data structures
//TODO: fix casing of classNames
- 1. [ ] GraphObject
- 1. [x] Queue
- 1. [x] BinaryTree
- 1. [x] GraphNode
- 1. [x] Tree


### Script for getting list of challenges/etc in each directory
```bash
for d in ./*;do [[ -d "$d" ]] && echo "${d##./}" >> dir.txt; done
```
## Resources

- [Interview Cake](https://interviewcake.com)
- [The Imposter's Handbook](https://bigmachine.io/products/the-imposters-handbook/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [codecov](https://codecov.io/)

## Badges
[![codecov](https://codecov.io/gh/chrismcdermut/codePractice/branch/master/graph/badge.svg)](https://codecov.io/gh/chrismcdermut/codePractice)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
