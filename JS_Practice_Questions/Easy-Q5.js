/**
Create a function findLargestAgeDifference that accepts an array of tuples, each tuple
representing a pair of ages. The function should return the largest age difference among
all pairs. If the array is empty, return 0.
*/

function findLargestAgeDifference(agePairs) {
  let LargestAgeDifference = 0;
  let check = 0;
  for (let i = 0; i < agePairs.length; i++) {
    check = Math.abs(agePairs[i][0] - agePairs[i][1]);
    if (check > LargestAgeDifference) {
      LargestAgeDifference = check;
    }
  }
  console.log(LargestAgeDifference);
}

findLargestAgeDifference([
  [18, 30],
  [29, 40],
  [50, 60],
]);

findLargestAgeDifference([
  [10, 20],
  [20, 30],
  [30, 40],
  [40, 50],
  [50, 60],
]);

findLargestAgeDifference([
  [1, 5],
  [6, 10],
  [11, 20],
  [21, 35],
  [36, 55],
  [56, 80],
]);

findLargestAgeDifference([
  [5, 25],
  [26, 46],
  [47, 67],
  [68, 88],
  [89, 109],
]);

findLargestAgeDifference([
  [15, 5],
  [25, 10],
  [60, 40],
  [100, 60],
]);

findLargestAgeDifference([
  [100, 300],
  [200, 400],
  [500, 800],
  [600, 900],
]);

findLargestAgeDifference([
  [33, 78],
  [55, 102],
  [90, 150],
  [120, 180],
]);

findLargestAgeDifference([]);

findLargestAgeDifference([
  [10, 7],
  [23, 10],
  [12, 8],
  [23, 30],
]);
