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
- 2. [x] bubbleSort - Bubble Sort Algorithm
- 3. [x] heapSort - Heap Sort Algorithm
- 4. [x] insertionSort - Insertion Sort Algorithm
- 5. [x] mergeSort - Merge Sort Algorithm
- 6. [x] quickSort - Quick Sort Algorithm
- 7. [x] selectionSort - Selection Sort Algorithm

### Challenges

- 1. [ ] arrayJumping
- 2. [x] arrayRotateLeft
- 3. [x] binaryTreeSum
- 4. [x] default
- 5. [x] findDuplicateInLL
- 6. [x] findFibonacci
- 7. [x] findLongestWord
- 8. [x] findShortestRoute
- 9. [x] graphColoring
- 10. [x] highestScores
- 11. [x] isValidBTreeCheck
- 12. [x] makingChange
- 13. [x] mergeArray
- 14. [x] mergeArrays
- 15. [x] mergeMeetingTimes
- 16. [x] missingArrayElement
- 17. [x] missingInteger
- 18. [ ] orderChecker
- 19. [x] palindrome
- 20. [x] permutationPalindrome
- 21. [x] productOfAll
- 22. [x] productOfThree
- 23. [x] recursiveStrings
- 24. [x] reverseArrayInPlace
- 25. [x] reverseString
- 26. [x] reverseWords
- 27. [ ] rotationPoint
- 28. [x] sandBox
- 29. [x] secondLargestBTreeItem
- 30. [ ] shortestString
- 31. [x] shuffleArray
- 32. [x] stockProfit
- 33. [x] strings
- 34. [x] superBalancedTreeCheck
- 35. [x] switchObjectKey
- 36. [x] wordCloud

### Concepts

- 1. [x] memoization


### Data structures
//TODO: fix casing of classNames
- 1. [ ] GraphObject
- 2. [x] Queue
- 3. [x] BinaryTree
- 4. [x] GraphNode
- 5. [x] Tree


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
