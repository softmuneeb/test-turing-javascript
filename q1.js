const game = (ops) => {
  let record = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (isNaN(op)) {
      if (op === 'C') record.pop();
      else if (op === 'D') record.push(Number(record[record.length - 1]) * 2);
      else if (op === '+') record.push(Number(record[record.length - 1]) + Number(record[record.length - 2]));
    } else record.push(op);
  }
  let sum = 0;
  record.map((r) => (sum += Number(r)));
  return sum;
};

console.log(game(['5', '2', 'C', 'D', '+']));
console.log(game(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
