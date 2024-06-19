const sumRange = (n) => {
  if (n === 1) return n

  return n + sumRange(n - 1)
}

console.log(sumRange(3))

console.log(sumRange(1))

console.log(sumRange(10))

console.log(sumRange(100))
