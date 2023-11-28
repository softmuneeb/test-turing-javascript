function reachTheEnd(grid, K) {
  let N = grid.length
  let M = grid[0].length

  // Stores the DP states
  let dp = new Array(N)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(M).fill(Number.MAX_VALUE)
  }

  // if first cell or last cell is blocked then
  // not possible
  if (grid[0][0] != '.' || grid[N - 1][M - 1] != '.') return 'No'

  // Initial condition
  dp[0][0] = 0

  // Initializing the DP table
  // in 1st row
  for (let i = 1; i < M; i++) {
    if (grid[0][i] == '.') {
      dp[0][i] = 1 + dp[0][i - 1]
    } else break
  }

  // Initializing the DP table
  // in 1st column
  for (let i = 1; i < N; i++) {
    if (grid[i][0] == '.') {
      dp[i][0] = 1 + dp[i - 1][0]
    } else break
  }

  // Iterate through the grid
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      // If current position
      // is not an obstacle,
      // update the dp state
      if (grid[i][j] == '.') {
        dp[i][j] = Math.min(dp[i][j], 1 + Math.min(dp[i - 1][j], dp[i][j - 1]))
      }
    }
  }

  // Return answer
  return dp[N - 1][M - 1] <= K ? 'Yes' : 'No'
}

// Test cases
console.log(reachTheEnd(['..##', '#.##', '#...'], 5)) // Yes
console.log(reachTheEnd(['..', '..'], 3)) // Yes
console.log(reachTheEnd(['.#', '#.'], 1)) // No
