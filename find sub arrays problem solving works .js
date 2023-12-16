function calcSubset(A, res, subset, index) {
  // Add the current subset to the result list
  res.push([...subset]);
  // Generate subsets by recursively including and excluding elements
  for (let i = index; i < A.length; i++) {
    // Include the current element in the subset
    subset.push(A[i]);
    // Recursively generate subsets with the current element included
    calcSubset(A, res, subset, i + 1);
    // Exclude the current element from the subset (backtracking)
    subset.pop();
  }
}

function subsets(A) {
  const subset = [];
  const res = [];
  let index = 0;
  calcSubset(A, res, subset, index);
  return res;
}

// Driver code
function main() {
  const array = [1, 2, 3];
  const res = subsets(array);

  console.log(res);
}

// Call the main function
main();
console.log(subsets.name);
