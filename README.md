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

- [ ]binarySearch - Binary Search Algorith
- [ ]bubbleSort - Bubble Sort Algorithm
- [ ]heapSort - Heap Sort Algorithm
- [ ]insertionSort - Insertion Sort Algorithm
- [ ]mergeSort - Merge Sort Algorithm
- [ ]quickSort - Quick Sort Algorithm
- [ ]selectionSort - Selection Sort Algorithm

### Challenges

- [ ]arrayJumping
- [ ]arrayRotateLeft
- [ ]binaryTreeSum
- [ ]default
- [ ]findDuplicateInLL
- [ ]findFibonacci
- [ ]findLongestWord
- [ ]findShortestRoute
- [ ]graphColoring
- [ ]highestScores
- [ ]isValidBTreeCheck
- [ ]makingChange
- [ ]mergeArray
- [ ]mergeArrays
- [ ]mergeMeetingTimes
- [ ]missingArrayElement
- [ ]missingInteger
- [ ]orderChecker
- [ ]palindrome
- [ ]permutationPalindrome
- [ ]productOfAll
- [ ]productOfThree
- [ ]recursiveStrings
- [ ]reverseArrayInPlace
- [ ]reverseString
- [ ]reverseWords
- [ ]rotationPoint
- [ ]sandBox
- [ ]secondLargestBTreeItem
- [ ]shortestString
- [ ]shuffleArray
- [ ]stockProfit
- [ ]strings
- [ ]superBalancedTreeCheck
- [ ]switchObjectKey
- [ ]wordCloud

### Concepts

- [ ]memoization


### Data structures
//TODO: fix casing of classNames
- [ ]GraphObject
- [ ]Queue
- [ ]BinaryTree
- [ ]GraphNode
- [ ]Tree


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
