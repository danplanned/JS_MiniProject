/**
Write a JavaScript function named rotateArray that takes two parameters: an array of
integers arr and a non-negative integer k, which represents the number of times the
array elements should be rotated to the right. The function should rotate the array
in-place, meaning you should modify the array directly without using extra space for
another array. After performing the rotation, the function doesn't need to return anything.

In the context of an array, "rotation" refers to moving the elements of the array around to
new positions according to a specific rule. When we talk about rotating an array to the
right (or clockwise), it means that each element is moved to the next position in the
array, and the last element moves to the first position. This process is repeated a
specified number of times (k times, in our case).
*/

function rotateArray(arr, k) {
    if (arr.length <= 1 || k <= 0) return;
    
    k = k % arr.length;

    function reverse(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    reverse(0, arr.length - 1);
    reverse(0, k - 1);
    reverse(k, arr.length - 1);
}

let arr = [1, 2, 3, 4, 5];
rotateArray(arr, 8);
console.log(arr);