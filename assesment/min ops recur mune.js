const min = -1_000_000_000;
const max = 1_000_000_000;

let ops = 0;
const getMinOperations = (arr, s, e) => {
  if (e - s === 1) {
    if (arr[e] + arr[s] < 0) {
      arr[e] = max;
      return 1;
    }
    return 0;
  }

  const ops1 = getMinOperations(arr, s, e / 2);
  const ops2 = getMinOperations(arr, e / 2 + 1, e);

  return ops1 + ops2;
};

const arr = [-1, -1, -1, -1];
console.log(getMinOperations(arr, 0, arr.length));
