function commonCharacters(ns) {
  if (ns.length === 0) return [];
  const fw = ns[0], res = [];
  for (let i = 0; i < fw.length; i++) {
    const char = fw[i];
    if (ns.every((name) => name.includes(char))) {
      res.push(char);
      ns = ns.map((name) => name.replace(char, ''));
    }
  }
  return res;
}

// Example 1
const example1 = commonCharacters(['nellie', 'leslie', 'stella']);
console.log(example1); // Output: ["e", "l", "l"]

// Example 2
const example2 = commonCharacters(['cool', 'lock', 'cook']);
console.log(example2); // Output: ["c", "o"]
