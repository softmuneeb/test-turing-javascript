// Javascript program of the above approach

const { log } = require('console')

// Function to find maximum length
// of subsequence having XOR of
// adjacent elements equal to K
function maxSubsequenceLength(a, n, k) {
  console.log({ n, k, a })
  // Stores maximum length of subsequence
  var ans = 0

  // Dictionary to store the longest length of
  // subsequence ending at an integer, say X
  var map = new Map()

  // Stores the maximum length of
  // subsequence ending at index i
  var dp = Array(n).fill(0)

  // Base case
  map.set(a[0], 1)
  dp[0] = 1

  // Iterate over the range [1, N-1]
  for (var i = 1; i < n; i++) {
    var dpj

    // Retrieve the longest length of
    // subsequence ending at integer []a^K
    if (map.has(a[i] ^ k)) {
      dpj = map.get(a[i] ^ k)
    } else {
      dpj = -1
    }

    // If dpj is not NULL
    if (dpj != -1)
      // Update dp[i]
      dp[i] = Math.max(dp[i], dpj + 1)

    // Update ans
    ans = Math.max(ans, dp[i])

    // Update the maximum length of subsequence
    // ending at element is a[i] in Dictionary
    if (map.has(a[i])) {
      map.set(a[i], Math.max(map.get(a[i]) + 1, dp[i]))
    } else {
      map.set(a[i], Math.max(1, dp[i]))
    }
  }

  // Return the ans if ans>=2.
  // Otherwise, return 0
  return ans >= 2 ? ans : 1
}

{
  let arr = [1, 1, 1]
  let K = 0
  let N = arr.length
  0 && console.log(maxSubsequenceLength(arr, N, K)) // 3 output OK
}
{
  let arr = [2, 1, 3, 5, 2]
  let K = 2
  let N = arr.length
  0 && console.log(maxSubsequenceLength(arr, N, K)) // 2 output OK
}
{
  let arr = [1, 2, 2, 1, 3]
  let K = 5
  let N = arr.length
  0 && console.log(maxSubsequenceLength(arr, N, K)) // 1 output OK
}
{
  let arr = [1_000_000, 123456, 1_000_000, 1_000_000, 123456]
  let K = 0
  let N = arr.length
  0 && console.log(maxSubsequenceLength(arr, N, K)) // 3 output OK
}

// 2 ^ 1 = 3
// 2 ^ 3 = 1
log(2 ^ 3)
