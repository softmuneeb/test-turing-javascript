const { log } = require('console');

function rearrangeStudents(arr1, arr2) {
  // Step 1: Hash all values of arr1 and arr2 in mapAll
  const mapAll = {};
  arr1.concat(arr2).forEach((item) => {
    mapAll[item] = (mapAll[item] || 0) + 1;
  });

  // Step 2: Check if all values in mapAll are divisible by 2
  if (!Object.values(mapAll).every((count) => count % 2 === 0)) {
    return -1;
  }

  // Step 3: Hash values of arr1 in mapArr1
  const mapArr1 = {};
  arr1.forEach((item) => {
    mapArr1[item] = (mapArr1[item] || 0) + 1;
  });

  // Step 4: Calculate the difference between mapAll and mapArr1
  let totalDifference = 0;
  Object.keys(mapAll).forEach((key) => {
    const shouldHave = mapAll[Number(key)] / 2;

    let diff = shouldHave - (mapArr1[key] || 0);
    if (diff < 0) diff *= -1;

    totalDifference += diff;
  });

  // Step 5: Return the result
  return totalDifference / 2;
}

// {
//   const arr1 = [1, 1, 3];
//   const arr2 = [2, 2, 3];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, 1);
// }
// {
//   const arr1 = [2, 2, 2, 2];
//   const arr2 = [4, 4, 1, 1];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, 2);
// }

// {
//   const arr1 = [4, 2, 2, 2];
//   const arr2 = [1, 4, 1, 2];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, 1);
// }
// {
//   const arr1 = [1, 2];
//   const arr2 = [2, 1];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, 0);
// }
// {
//   const arr1 = [1, 2, 3];
//   const arr2 = [1, 3, 4];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, -1);
// }
// {
//   const arr1 = [
//     950, 938, 879, 950, 938, 950, 950, 938, 711, 711, 950, 950, 950, 950, 711,
//     879, 950, 879, 950, 879, 711, 711, 950, 711, 938, 711, 879, 938, 879, 950,
//     711, 950, 938, 950, 711, 844, 711, 950, 879, 950, 919, 950, 938, 950, 711,
//     950, 950, 879, 950, 711, 711, 711, 844, 950, 938, 950, 950, 950, 950, 879,
//     950, 620, 711, 879, 950, 950, 938, 711, 950, 950, 879, 711, 950, 950, 844,
//     879, 879, 711, 950,
//   ];
//   const arr2 = [
//     879, 950, 711, 879, 938, 711, 950, 950, 950, 950, 950, 950, 711, 950, 938,
//     938, 950, 620, 879, 950, 711, 879, 844, 879, 950, 620, 711, 711, 950, 711,
//     620, 950, 711, 950, 879, 879, 950, 950, 938, 950, 938, 879, 950, 950, 919,
//     950, 950, 844, 711, 950, 950, 879, 620, 879, 950, 950, 950, 620, 711, 938,
//     950, 711, 950, 711, 711, 950, 950, 938, 711, 879, 950, 938, 950, 950, 938,
//     844, 711, 950, 711,
//   ];
//   const result = rearrangeStudents(arr1, arr2);
//   console.log(result, 'no know');
// }
{
  const arr1 = [
    950, 938, 879, 950, 938, 950, 950, 938, 711, 711, 950, 950, 950, 950, 711,
    879, 950, 879, 950, 879, 711, 711, 950, 711, 938, 711, 879, 938, 879, 950,
    711, 950, 938, 950, 711, 844, 711, 950, 879, 950, 919, 950, 938, 950, 711,
    950, 950, 879, 950, 711, 711, 711, 844, 950, 938, 950, 950, 950, 950, 879,
    950, 620, 711, 879, 950, 950, 938, 711, 950, 950, 879, 711, 950, 950, 844,
    879, 879, 711, 950,
  ].sort()
  log(arr1)
  const arr2 = [
    879, 950, 711, 879, 938, 711, 950, 950, 950, 950, 950, 950, 711, 950, 938,
    938, 950, 620, 879, 950, 711, 879, 844, 879, 950, 620, 711, 711, 950, 711,
    620, 950, 711, 950, 879, 879, 950, 950, 938, 950, 938, 879, 950, 950, 919,
    950, 950, 844, 711, 950, 950, 879, 620, 879, 950, 950, 950, 620, 711, 938,
    950, 711, 950, 711, 711, 950, 950, 938, 711, 879, 950, 938, 950, 950, 938,
    844, 711, 950, 711,
  ].sort();
  log(arr2);
  // const result = rearrangeStudents(arr1, arr2);
  // console.log(result, 'no know');
}
