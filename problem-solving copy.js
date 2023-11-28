
function permute(arr, start = 0) {
  if (start === arr.length - 1) return console.log(arr)

  for (let i = start; i < arr.length; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]]

    permute(arr, start + 1);
    
    [arr[start], arr[i]] = [arr[i], arr[start]]
  }
}

const arrayToPermute = [1, 2, 3]
permute(arrayToPermute)