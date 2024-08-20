function selectionSort(arr) {
  const n = arr.length;

  // One by one move the boundary of the unsorted subarray
  for (let i = 0; i < n - 1; i++) {
      // Assume the current element is the minimum
    let minIndex = i;

    // Find the actual minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
          minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Using array destructuring for swapping
    }
  }

  return arr;
}

module.exports = selectionSort;