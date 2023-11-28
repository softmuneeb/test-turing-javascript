function alternatingParityPermutations(n) {
  const result = []

  function permute(arr, index) {
    if (index === n) {
      result.push([...arr])
      return
    }

    for (let i = 1; i <= n; i++) {
      if (!arr.includes(i) && (index === 0 || (index % 2 === 1 && i % 2 === 0) || (index % 2 === 0 && i % 2 === 1))) {
        arr[index] = i
        permute(arr, index + 1)
        arr[index] = undefined
      }
    }
  }

  permute([], 0)
  return result
}

// Example usage:
const n = 2
const result = alternatingParityPermutations(n)

console.log(result)
