function getMinOperations(arr) {
  let operations = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] < 0) {
      operations++;

      if (arr[i] < arr[i + 1]) {
        arr[i] = -arr[i + 1];
      } else {
        arr[i + 1] = -arr[i + 1];
      }
    }
  }
  console.log(arr);

  return operations;
}

console.log(getMinOperations([-1, -1, -1, -1, -1, -1, -1, -1, -1]));
