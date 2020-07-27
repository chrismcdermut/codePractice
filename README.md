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

1. binarySearch - Binary Search Algorith
[ ]
1. bubbleSort - Bubble Sort Algorithm
[ ]
1. heapSort - Heap Sort Algorithm
[ ]
1. insertionSort - Insertion Sort Algorithm
[ ]
1. mergeSort - Merge Sort Algorithm
[ ]
1. quickSort - Quick Sort Algorithm
[ ]
1. selectionSort - Selection Sort Algorithm
[ ]

### Challenges

1. arrayJumping
[ ]
1. arrayRotateLeft
[ ]
1. binaryTreeSum
[ ]
1. default
[ ]
1. findDuplicateInLL
[ ]
1. findFibonacci
[ ]
1. findLongestWord
[ ]
1. findShortestRoute
[ ]
1. graphColoring
[ ]
1. highestScores
[ ]
1. isValidBTreeCheck
[ ]
1. makingChange
[ ]
1. mergeArray
[ ]
1. mergeArrays
[ ]
1. mergeMeetingTimes
[ ]
1. missingArrayElement
[ ]
1. missingInteger
[ ]
1. orderChecker
[ ]
1. palindrome
[ ]
1. permutationPalindrome
[ ]
1. productOfAll
[ ]
1. productOfThree
[ ]
1. recursiveStrings
[ ]
1. reverseArrayInPlace
[ ]
1. reverseString
[ ]
1. reverseWords
[ ]
1. rotationPoint
[ ]
1. sandBox
[ ]
1. secondLargestBTreeItem
[ ]
1. shortestString
[ ]
1. shuffleArray
[ ]
1. stockProfit
[ ]
1. strings
[ ]
1. superBalancedTreeCheck
[ ]
1. switchObjectKey
[ ]
1. wordCloud
[ ]

### Concepts

1. memoization
[ ]

### Data structures
1. GraphObject
[ ]
1. Queue
[ ]
1. binaryTree
[ ]
1. graphNode
[ ]
1. tree
[ ]

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
