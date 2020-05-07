/* eslint-disable */
// TODO: enable linting

let arrayLength;

const swap = (inputArg, originalMax, newMax) => {
  const input = inputArg;
  const temp = input[originalMax];

  input[originalMax] = input[newMax];
  input[newMax] = temp;
};

/* to create MAX  array */
const heapRoot = (input, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrayLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
};

const heapSort = (input) => {
  arrayLength = input.length;

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i);
  }

  for (let j = input.length - 1; j > 0; j -= 1) {
    swap(input, 0, j);
    arrayLength -= 1;

    heapRoot(input, 0);
  }
};

const exampleList = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34];

module.exports.runHeapSort = function () {
  // console.log(heapSort(exampleList));
  heapSort(exampleList);
  console.log(exampleList);
};

// var arr = [3, 0, 2, 5, -1, 4, 1];
// heapSort(exampleList);
// console.log(exampleList);
