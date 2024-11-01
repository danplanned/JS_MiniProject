/** 
Create a function sumEvenNumbers that takes an array of numbers as a parameter and
returns the sum of all the even numbers in the array.
*/

function sumEvenNumbers(numbers) {
  // Your code here
  let TempNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      TempNum += numbers[i];
    }
  }

  console.log(TempNum);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);
sumEvenNumbers([2, 4, 6, 8, 10]);
sumEvenNumbers([1, 3, 5, 7, 9]);
sumEvenNumbers([-2, -4, -6, -8, -10]);
sumEvenNumbers([0, 1, 2, 3, 4]);
sumEvenNumbers([11, 22, 33, 44, 55]);
sumEvenNumbers([]);
sumEvenNumbers([-2, -4, -6, -8, -10, 0, 2, 4, 5]);
