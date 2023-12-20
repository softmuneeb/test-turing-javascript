function findMinDistancePoint2(lines) {
  const n = lines.length;
  // Flatten the array to get all endpoint coordinates
  const allPoints = lines.flat();

  // Calculate the average of all coordinates
  const averagePoint =
    allPoints.reduce((sum, coordinate) => sum + coordinate, 0) / (2 * n);

  // Round the average point to the nearest integer
  const resultPoint = [Math.round(averagePoint), Math.round(averagePoint)];

  return resultPoint;
}

function findMinDistancePoint(lines) {
  const n = lines.length;
  // Calculate midpoints of all lines
  const midpoints = lines.map(([x1, y1, x2, y2]) => [
    (x1 + x2) / 2,
    (y1 + y2) / 2,
  ]);

  // Calculate the average of all midpoints
  const averagePoint = midpoints
    .reduce(([sumX, sumY], [x, y]) => [sumX + x, sumY + y], [0, 0])
    .map((sum) => sum / n);

  // Round the average point to the nearest integer
  const resultPoint = averagePoint.map(Math.round);

  return resultPoint;
}

function findPoint(lines) {
  //   console.log(lines);
  const n = lines.length;
  // Initialize variables to store the minimum distance and the corresponding point
  let minDistance = Number.MAX_SAFE_INTEGER;
  let resultPoint = [0, 0];

  const mayPoint = findMinDistancePoint2(lines);

  // Iterate through all possible integer points
  for (let x = mayPoint[0] - 100; x <= mayPoint[0] + 100; x++) {
    for (let y = mayPoint[1] - 100; y <= mayPoint[1] + 100; y++) {
      let distanceSum = 0;

      // Calculate the sum of distances from the current point to all line segments
      for (let i = 0; i < n; i++) {
        const [x1, y1, x2, y2] = lines[i];
        distanceSum +=
          Math.abs(x - x1) +
          Math.abs(y - y1) +
          Math.abs(x - x2) +
          Math.abs(y - y2);
      }

      // Update the minimum distance and result point if the current point has a smaller sum of distances
      if (distanceSum < minDistance) {
        minDistance = distanceSum;
        resultPoint = [x, y];
      } else if (distanceSum === minDistance) {
        // If the sum of distances is the same, choose the point with the minimum x coordinate
        if (x < resultPoint[0]) {
          resultPoint = [x, y];
        }
      }
    }
  }

  return resultPoint;
}

{
  const lines = [
    [4, 2, 4, 5],
    [3, 3, 5, 3],
    [0, 3, 0, 4],
  ];
  const result = findPoint(lines);
  console.log('Minimum sum of distances point:', result);
}
{
  const lines = [
    [2, 4, 2, 0],
    [2, 1, 0, 1],
    [4, 3, 4, 4],
    [5, 5, 4, 5],
  ];
  const result = findPoint(lines);
  console.log('Minimum sum of distances point:', result);
}
{
  const lines = [
    [-95, 615, -95, -918],
    [37, 976, 11, 976],
    [168, 185, 168, 796],
    [-310, 446, -313, 446],
    [-39, -145, -39, -622],
    [837, 300, -127, 300],
    [-933, -670, -933, -679],
    [714, 538, -154, 538],
    [90, -543, 90, 262],
    [927, -702, -226, -702],
    [855, 897, 855, 664],
    [808, 823, -145, 823],
    [-74, -779, -74, 746],
    [-302, -980, -767, -980],
    [-236, -956, -236, 760],
    [-493, 71, -939, 71],
    [-667, -232, -667, -166],
    [70, 222, 336, 222],
    [-442, 170, -442, -418],
    [644, -101, -746, -101],
    [-143, 587, -143, -308],
    [-998, -281, 972, -281],
    [-992, -203, -992, 560],
    [444, -945, -683, -945],
    [-301, 1000, -301, -768],
    [639, 509, -394, 509],
    [305, -179, 305, -869],
    [-179, -721, -772, -721],
    [23, 442, 23, 726],
    [-645, -517, -348, -517],
    [526, 294, 526, -753],
    [937, -63, -472, -63],
    [882, 637, 882, 883],
    [-306, -554, -28, -554],
    [694, 257, 694, -234],
    [581, -773, 940, -773],
    [-654, -203, -654, -102],
    [348, 196, 777, 196],
    [-155, 990, -155, -134],
    [668, 113, -733, 113],
    [-144, 379, -144, -545],
    [265, -518, 177, -518],
    [-812, 107, -812, 20],
    [-96, 763, 815, 763],
    [830, -898, 830, -691],
    [-117, -538, -139, -538],
    [-38, 919, -38, 818],
    [-922, 358, 511, 358],
    [-182, -89, -182, 70],
    [-337, 56, 677, 56],
    [68, 529, 68, -151],
    [-974, 576, 788, 576],
    [369, -566, 369, 389],
    [-487, -765, -34, -765],
    [-853, -228, -853, -624],
    [417, -88, 904, -88],
    [-588, 948, -588, 32],
    [-508, 653, 446, 653],
    [-282, 95, -282, -737],
    [244, 19, -643, 19],
    [52, 330, 52, 399],
    [-867, 649, 471, 649],
    [382, 461, 382, -75],
    [573, -785, 803, -785],
    [-662, -25, -662, -558],
    [-484, 677, 906, 677],
    [-690, -468, -690, -563],
    [304, 18, -529, 18],
    [-767, 96, -767, -258],
    [839, -992, 359, -992],
    [-141, 687, -141, -190],
    [667, -436, -313, -436],
    [-562, -624, -562, 589],
    [-930, 77, -380, 77],
    [-68, -327, -68, -355],
    [501, -819, 566, -819],
    [332, -509, 332, -154],
    [-873, -921, -731, -921],
    [967, -884, 967, 953],
    [-655, -489, 707, -489],
    [165, 460, 165, -371],
    [-860, 760, 542, 760],
    [285, -117, 285, -593],
    [492, -808, -43, -808],
    [-960, 584, -960, 573],
    [-655, 550, -814, 550],
    [276, -759, 276, 968],
    [-684, 681, -301, 681],
    [138, 354, 138, -24],
    [-740, 973, 882, 973],
    [473, 276, 473, 676],
    [-91, 333, 398, 333],
    [-68, 212, -68, 651],
    [50, -656, -117, -656],
    [231, -35, 231, 972],
    [-610, 220, 7, 220],
    [332, 976, 332, -307],
    [-449, -427, 96, -427],
    [-419, -650, -419, 542],
    [-986, -146, 526, -146],
  ];
  const result = findPoint(lines);
  console.log('Minimum sum of distances point:', result);
}

/*

Your Output (stdout)
0, 18
Debug output


*/
