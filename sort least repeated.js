function sortByLeastRepeated(arr) {
  const fMap = {};
  arr.forEach((num) => (fMap[num] = (fMap[num] || 0) + 1));
  return arr.sort((a, b) => (fMap[a] !== fMap[b] ? fMap[a] - fMap[b] : b - a));
}

// Example usage
const k = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
const result = sortByLeastRepeated(k);
console.log(result); // Output: [5, -1, 4, 4, -6, -6, 1, 1, 1]
