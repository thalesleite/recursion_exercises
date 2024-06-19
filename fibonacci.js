// F(n) = F(n-1) + F(n-2)
// F(0) = 0
// F(1) = 1

console.log("---- LOOP ----------")
// O(n)
const fibonacciLoop = (n) => {
  let first = 0,
    second = 1,
    sum,
    index = 0

  for (index = 2; index < n; index++) {
    sum = first + second
    first = second
    second = sum
  }

  return sum
}

console.log(fibonacciLoop(7))
console.log(fibonacciLoop(6))

// sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

console.log("---- RECURSIVE -----")
// O(2^n)
const fibonacci = (n) => {
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))
console.log(fibonacci(0))
console.log(fibonacci(10))
