/**
 Write a JavaScript function named mergeSortedArrays that takes two arrays of numbers
as inputs, both of which are already sorted in ascending order. The function should
return a new array that merges both input arrays into one, maintaining the ascending
order. Aim for an efficient solution that does not use the built-in sort method.
 */

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("\n");
  console.log(mergedArray);
}

mergeSortedArrays([1, 3, 5], [2, 4, 6]);
mergeSortedArrays([], [1, 2, 3]);
mergeSortedArrays([1, 3], [2, 4, 5, 6]);
mergeSortedArrays([1, 2, 2], [2, 3, 4]);
mergeSortedArrays([-3, -2, -1], [1, 2, 3]);
mergeSortedArrays([1, 2, 3], [4, 5, 6]);
mergeSortedArrays([100, 200, 300], [50, 150, 250]);
mergeSortedArrays(
  [-10, 1, 2, 3, 4, 50, 60, 70, 100, 110],
  [-5, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]
);
