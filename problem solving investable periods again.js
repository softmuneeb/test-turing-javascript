const getInv = (arr, min, max, l, r, memo = {}) => {
  if (memo[l + ',' + r]) return 0;

  if (l < 0 || r >= arr.length) {
    console.log(arr, l, r, 0, 'base');
    return 0;
  }

  const canBe = (v) => v >= min && v <= max;
  const getMyAns = () => {
    let minF = false;
    let maxF = false;
    for (let i = l; i <= r; i++) {
      const el = arr[i];
      if (el === min) minF = true;
      if (el === max) maxF = true;
    }
    return minF && maxF ? 1 : 0;
  };

  const leftInv = canBe(arr[l - 1]) ? getInv(arr, min, max, l - 1, r, memo) : 0;
  const rightInv = canBe(arr[r + 1])
    ? getInv(arr, min, max, l, r + 1, memo)
    : 0;
  const myAns = getMyAns();
  const tot = myAns + leftInv + rightInv;
  console.log(arr, l, r, 'ans:', myAns + leftInv + rightInv);

  memo[l + ',' + r] = tot;
  return tot;
};

const getAll = (arr, min, max) => {
  let steps = 0;
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min || arr[i] === max) {
      steps += getInv(arr, min, max, i, i, memo);
    }
  }

  return steps;
};

// console.log(getInv([4, 3, 4, 5, 4, 1, 2], 3, 5, 1, 1));
// console.log(getInv([4, 3, 5, 4], 3, 5, 1, 1));
//
// console.log(getAll([4, 5, 3, 3, 1], 3, 5)); // 4
console.log(getAll([2, 2, 1, 5, 1], 1, 2)); // 2
console.log(getAll([1, 2, 3, 2], 2, 3)); // 3
