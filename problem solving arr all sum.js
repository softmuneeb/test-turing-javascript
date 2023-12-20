const allSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [[]];
  if (target < 0) return [];

  let all = [];

  for (let num of numbers) {
    const remainder = target - num;
    const remTargetSum = allSum(remainder, numbers, memo);
    if (remTargetSum.length > 0) {
      const targetSum = remTargetSum.map((arr) => [...arr, num]);

      all = [...all, ...targetSum];
    }
  }

  memo[target] = all;
  return all;
};

console.log(allSum(8, [2, 3, 5]));
// console.log(allSum(7, [5, 3, 4, 7]));
// console.log(allSum(8, [1, 4, 5]));
console.log(allSum(100, [5, 25]));
