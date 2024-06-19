// Merge Sort
// 1. Sort the left half of the array(n > 1)
// 2. Sort the right half of the array(n > 1)
// 3. Merge the two halves together

// worst: O(n log n)
// best: Ω(n log n)

// [3, 2, 1, 13, 8, 5, 0, 1]
// [105, 79, 100, 110]

const mergeSort = (arr) => {
  // if the array has only one element
  if (arr.length === 1) return arr

  // divide the array in two halves
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // recursively call mergeSort on the left and right halves
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []
  let leftIndex = 0,
    rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++ // Move to the next element in the `left` array
    } else {
      result.push(right[rightIndex])
      rightIndex++ // Move to the next element in the `right` array
    }
  }

  // Push the remaining elements from the left array (if any)
  // while (leftIndex < left.length) {
  //   result.push(left[leftIndex++])
  // }

  // // Push the remaining elements from the right array (if any)
  // while (rightIndex < right.length) {
  //   result.push(right[rightIndex++])
  // }

  // return result

  // Concatenate the remaining elements from either left or right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]))
