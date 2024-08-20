function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Compare the current element with the sorted portion of the array
    while (j >= 0 && arr[j] > current) {
        // Shift the element to the right to make room for the current element
        arr[j + 1] = arr[j];
        j--;
    }

    // Place the current element at its correct position
    arr[j + 1] = current;
  }

  return arr;  
}

module.exports = insertionSort;