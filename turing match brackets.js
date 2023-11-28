const isValid = (input) => {
  const brackets = input.split('');
  const record = [];
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    if (bracket === '(' || bracket === '[' || bracket === '{')
      record.push(bracket);
    else {
      const b = record.pop() + bracket;
      if (!(b === '()' || b === '[]' || b === '{}')) return false;
    }
  }
  return true;
};

console.log(isValid('[{}]'));
console.log(isValid('[{)}]'));
console.log(isValid('[({})]'));
