let steps = 0;
const bestSum = (target, numbers, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let best = null;

  for (let num of numbers) {
    const remainder = target - num;
    const remTargetSum = bestSum(remainder, numbers, memo);
    if (remTargetSum !== null) {
      const targetSum = [...remTargetSum, num];
      if (best === null || targetSum.length < best.length) {
        best = targetSum;
      }
    }
  }

  memo[target] = best;
  steps++;
  return best;
};

// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(20, [1, 2, 5, 25]));
console.log({ steps }); // { steps: 20 } with memo // { steps: 37660 } without memo
