// Merge Sort
// 1. Sort the left half of the array(n > 1)
// 2. Sort the right half of the array(n > 1)
// 3. Merge the two halves together

// worst: O(n log n)
// best: Ω(n log n)

/*
Algorithm MergeSort(low, high) {
  if (low < high) {
  
    mid = (low + high)/2

    MergeSort(low, mid)
    MergeSort(mid + 1, high)
    Merge(low, mid, high)
  }
}
*/
