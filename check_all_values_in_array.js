const all = (arr, callback) => {
  let copy = copy || arr.slice()

  if (copy.length === 0) return true

  if (callback(copy[0])) {
    copy.shift() // remove first el from array
    return all(copy, callback)
  }

  return false
}

const allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7
})

console.log(allAreLessThanSeven) // false
