
const getInv = (arr, l, r, min, max) => {
  if (!(l - 1 >= 0 || r + 1 < arr.length)) {
    return arr.some((num) => num === min) && arr.some((num) => num === max)
      ? 1
      : 0;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === min || num === max) {
      getInv([num], i);
    }
  }
};

console.log(getInv([4, 3, 4, 5, 4, 1, 2], 3, 5));
