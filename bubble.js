function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop for each pass through the array
  do {
      swapped = false;

      // Inner loop for comparing adjacent elements
      for (let i = 0; i < n - 1; i++) {
          // Swap if the current element is greater than the next element
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
      // After each pass, the largest element is in its correct position,
      // so we can reduce the number of comparisons in subsequent passes
      n--;
  } while (swapped);

  return arr;

}
module.exports = bubbleSort;