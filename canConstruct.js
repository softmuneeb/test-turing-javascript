function canConstruct(target, wordBank) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++)
    if (table[i] === true)
      for (let word of wordBank)
        if (target.slice(i, i + word.length) + '' === word + '')
          table[i + word.length] = true;

  return table[target.length];
}

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct([15, 88], [[88], [15]])); // true
