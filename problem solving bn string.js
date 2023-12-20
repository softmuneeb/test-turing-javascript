let steps = 0;

const countStr = (arr, one, zero, memo = {}) => {
  if (arr in memo) return memo[arr];
  if (!arr.split('').some((val) => val === '_')) return 1;

  const rOne = arr.replace('_'.repeat(one.length), one);
  const remOne = arr === rOne ? 0 : countStr(rOne, one, zero, memo);

  const rZero = arr.replace('_'.repeat(zero.length), zero);
  const remZero = arr === rZero ? 0 : countStr(rZero, one, zero, memo);

  steps++;

  const res = remOne + remZero;
  memo[arr] = res;
  return res;
};

const countStrings = (min_count, max_count, one_count, zero_count) => {
  let sum = 0;
  for (let i = min_count; i <= max_count; i++) {
    sum += countStr(
      '_'.repeat(i),
      '1'.repeat(one_count),
      '0'.repeat(zero_count),
    );
  }

  console.log({ steps });
  return sum;
};

// console.log(countStr('___', 3, '11', '0'));
// console.log(countStr('_'.repeat(5), 5, '111', '00'));
//
console.log(countStrings(2, 5, 3, 2));
console.log(countStrings(1, 3, 2, 1));
