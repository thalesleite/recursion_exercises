const fibonacci = (n) => {
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}
// sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

console.log(fibonacci(6))
console.log(fibonacci(0))
console.log(fibonacci(10))
