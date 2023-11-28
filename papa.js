const { log } = require('console')

function getNumVectors(keys, queries) {
  const results = []
  const memo = new Map()

  function countAttackVectors(start, end) {
    if (keys[keys.length - 1] < start) {
      return 0
    }

    if (memo.has(`${start}-${end}`)) {
      return memo.get(`${start}-${end}`)
    }

    let count = 0

    for (let x = start; x <= end; x++) {
      for (let j = 0; j < keys.length; j++) {
        if (keys[j] < x) {
          break
        }
        for (let k = 0; k < keys.length; k++) {
          log(`(${keys[j]}, ${keys[k]}, ${x})`)
          if (keys[j] % x === 0 && keys[k] % x === 0) {
            count++
          }
        }
      }
    }

    memo.set(`${start}-${end}`, count)
    return count
  }

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i]
    const count = countAttackVectors(start, end)
    results.push(count)
  }

  return results
}

// Sample Case 0
const keys1 = [4, 16, 37]
const queries1 = [
  [2, 4],
  [1, 2],
]
console.log(getNumVectors(keys1, queries1)) // Output: [8, 13]

// Sample Case 1
const keys2 = [1, 2, 3]
const queries2 = [
  [100, 200],
  [1, 1],
]
console.log(getNumVectors(keys2, queries2)) // Output: [0, 9]
