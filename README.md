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

[ ] 1. binarySearch - Binary Search Algorith
[x] 2. bubbleSort - Bubble Sort Algorithm
[x] 3. heapSort - Heap Sort Algorithm
[x] 4. insertionSort - Insertion Sort Algorithm
[x] 5. mergeSort - Merge Sort Algorithm
[x] 6. quickSort - Quick Sort Algorithm
[x] 7. selectionSort - Selection Sort Algorithm

### Challenges

[ ] 1. arrayJumping
[x] 2. arrayRotateLeft
[x] 3. binaryTreeSum
[x] 4. default
[x] 5. findDuplicateInLL
[x] 6. findFibonacci
[x] 7. findLongestWord
[x] 8. findShortestRoute
[x] 9. graphColoring
[x] 10. highestScores
[x] 11. isValidBTreeCheck
[x] 12. makingChange
[x] 13. mergeArray
[x] 14. mergeArrays
[x] 15. mergeMeetingTimes
[x] 16. missingArrayElement
[x] 17. missingInteger
[ ] 18. orderChecker
[x] 19. palindrome
[x] 20. permutationPalindrome
[x] 21. productOfAll
[x] 22. productOfThree
[x] 23. recursiveStrings
[x] 24. reverseArrayInPlace
[x] 25. reverseString
[x] 26. reverseWords
[ ] 27. rotationPoint
[x] 28. sandBox
[x] 29. secondLargestBTreeItem
[ ] 30. shortestString
[x] 31. shuffleArray
[x] 32. stockProfit
[x] 33. strings
[x] 34. superBalancedTreeCheck
[x] 35. switchObjectKey
[x] 36. wordCloud

### Concepts

[x] 1. memoization


### Data structures
//TODO: fix casing of classNames
[ ] 1. GraphObject
[x] 2. Queue
[x] 3. BinaryTree
[x] 4. GraphNode
[x] 5. Tree


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
- [stackedit](https://stackedit.io/)

## Badges
[![codecov](https://codecov.io/gh/chrismcdermut/codePractice/branch/master/graph/badge.svg)](https://codecov.io/gh/chrismcdermut/codePractice)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
