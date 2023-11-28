const { log } = require('console')

function getMaxSumOfArray(arr1, arr2) {
  arr1.sort((a, b) => b - a)
  arr2.sort((a, b) => a - b)
  let sum = 0n // Initialize sum as BigInt
  for (let i = 0; i < arr1.length; i++) {
    const diff = BigInt(arr2[i]) - BigInt(arr1[i])
    sum += diff * BigInt(i + 1)
  }
  return Number(sum % 1000000007n)
}

{
  let arr1 = [2, 1, 3, 4]
  let arr2 = [2, 3, 2, 3]
  log(getMaxSumOfArray(arr1, arr2)) // output should be 7
}
