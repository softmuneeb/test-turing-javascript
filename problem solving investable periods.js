const getInv = (arr, min, max, l, r, level = 0) => {
  if (l <= 0 || r >= arr.length) {
    const minF = false;
    const maxF = false;
    for (let i = l; i <= r; i++) {
      const el = arr[i];
      if (el === min) minF = true;
      if (el === max) maxF = true;
    }
    return minF && maxF ? 1 : 0;
  }

  if (level === 0) {
    let total = 0;
    for (let i = l; i < arr.length; i++) {
      const num = arr[i];
      if (num === min || num === max) {
        total += getInv(arr, min, max, i, i, level + 1);
      }
    }

    return total;
  } else {
    const leftInv = getInv(arr, min, max, i - 1, i, level + 1);
    const rightInv = getInv(arr, min, max, i, i + 1, level + 1);
    return leftInv + rightInv;
  }
};

console.log(getInv([4, 3, 4, 5, 4, 1, 2], 3, 5));
