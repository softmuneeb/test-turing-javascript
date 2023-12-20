const bestSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let best = null;

  for (let num of numbers) {
    const remainder = target - num;
    const remTargetSum = bestSum(remainder, numbers);
    if (remTargetSum !== null) {
      const targetSum = [...remTargetSum, num];
      if (best === null || targetSum.length < best.length) {
        best = targetSum;
      }
    }
  }
  return best;
};

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));
