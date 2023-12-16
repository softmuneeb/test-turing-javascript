const allC = (word, wordBank) => {
  if (word === '') return [[]];

  let res = [];

  for (const subWord of wordBank) {
    if (word.startsWith(subWord)) {
      res.push(...[allC(word.slice(subWord.length), wordBank), subWord]);
    }
  }

  return res;
};

console.log(allC('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
