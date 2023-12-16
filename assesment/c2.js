function getMinOperations(arr) {
  let totalOperations = 0;
  let currentOperations = 0;
  let maxNegative = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentOperations += arr[i];

    if (currentOperations < 0) {
      maxNegative = Math.max(maxNegative, currentOperations);
    }

    if (currentOperations + maxNegative < 0) {
      totalOperations -= currentOperations + maxNegative;
      currentOperations -= maxNegative;
      maxNegative = 0;
    }
  }

  return totalOperations;
}

const arr = [2, 5, -8, -1, 2];
const minOperations = getMinOperations(arr);
console.log(minOperations);
