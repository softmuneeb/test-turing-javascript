const getMinOperations = (arr) => {
  const min = -1_000_000_000;
  const max = 1_000_000_000;
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] < 0) {
      arr[i + 1] = 10;
      count = count + 1;
    }
  }
  return count;
};
