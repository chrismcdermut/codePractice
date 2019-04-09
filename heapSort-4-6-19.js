let exampleList = [4,56,1,14,11,67,23,3,7,89,16,2,91,34];

module.exports.runHeapSort = function() {
  // console.log(heapSort(exampleList));
  heapSort(exampleList);
  console.log(exampleList);
}

var array_length;
/* to create MAX  array */
const heap_root = (input, i) => {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

const swap = (input, originalMax, newMax) => {
  var temp = input[originalMax];

  input[originalMax] = input[newMax];
  input[newMax] = temp;
}

const heapSort = (input) => {

  array_length = input.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;


      heap_root(input, 0);
  }
}

// var arr = [3, 0, 2, 5, -1, 4, 1];
// heapSort(exampleList);
// console.log(exampleList);
