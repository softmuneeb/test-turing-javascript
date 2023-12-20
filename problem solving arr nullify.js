const _arrNullify = (changeArr, arr, i = 0) => {
  if (arr.every((val) => val === 'NULL')) return i;
  if (i === changeArr.length) return 100_000;

  let minOps = 100_000;

  // minus 1 from all, and get min ops
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > -1) {
      const arrCpy = [...arr];
      arrCpy[j]--;
      const ops = _arrNullify(changeArr, arrCpy, i + 1);
      minOps = Math.min(ops, minOps);
    }
  }

  // make NULL at arr[changeArr[i]-1] and get min ops
  if (changeArr[i] > -1 && arr[changeArr[i]] === 0) {
    const cpyArr = [...arr];
    cpyArr[changeArr[i]] = 'NULL';
    const ops = _arrNullify(changeArr, cpyArr, i + 1);
    minOps = Math.min(ops, minOps);
  }

  return minOps;
};

const arrNullify = (changeArr, arr) => {
  const minOps = _arrNullify(
    changeArr.map((n) => n - 1),
    arr,
  );
  return minOps === 100_000 ? -1 : minOps;
};

console.log(arrNullify([0, 1, 0, 2], [1, 1]));
console.log(arrNullify([1, 0, 1, 3, 2, 1, 0, 3, 1, 1], [2, 1, 2]));
console.log(arrNullify([0, 0, 0, 2, 1, 3, 2], [1, 3, 2]));
