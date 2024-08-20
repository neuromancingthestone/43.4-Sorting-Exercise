function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge elements from both halves in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // If there are remaining elements in the left half, add them to the result
  while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
  }

  // If there are remaining elements in the right half, add them to the result
  while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
  }

  return result;  
}

function mergeSort(arr) {
  // Base case: an array with 1 or 0 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

module.exports = { merge, mergeSort};