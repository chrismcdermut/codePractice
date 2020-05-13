/* eslint-disable */
// TODO: enable linting

const exampleList = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34];
let arrayLength;

const swap = (inputArg, indexA, indexB) => {
  const input = inputArg;
  const temp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = temp;
};

const heapify = (inputArg, i) => {
  const input = inputArg;
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
    heapify(input, max);
  }
};

const heapSort = (inputArg) => {
  const input = inputArg;
  arrayLength = input.length;
  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapify(input, i);
  }
  for (let i = input.length - 1; i > 0; i -= 1) {
    console.log('logging input');
    console.log(input);
    swap(input, 0, i);
    arrayLength -= 1;
    heapify(input, 0);
  }
};

module.exports.runHeapSort = function () {
  console.log('running');
  console.log(exampleList);
  heapSort(exampleList);
  console.log(exampleList);
};
