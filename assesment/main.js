/*

You can do one swap to make number largest

Input:  1736
Output: 7136

Input:  9873
Output: 9873

Input:  30886
Output: 80836

Input:  161616
Output: 661611

Input:  9104
Output: 9401

Input:  80886
Output: 88806

Input:  88162
Output: 88612

        
Input:  94386
Output: 98346

[9,1,0,4]
[9,4,0,1]
*/

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const biggestNumber = (num) => {
  const expects = num
    .split('')
    .map((n) => Number(n))
    .sort((a, b) => b - a);

  const originals = num.split('').map((n) => Number(n));

  for (let i = 0; i < expects.length; i++) {
    const orig = originals[i];
    const expect = expects[i];

    if (orig < expect) {
      swap(originals, i, originals.lastIndexOf(expect));
      break;
    }
  }

  return originals.join('');
};

console.log(biggestNumber('94386'));
    