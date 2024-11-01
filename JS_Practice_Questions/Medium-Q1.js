/**
Write a JavaScript function named findUniqueCharacters that takes a string as input
and returns a string containing only the unique characters from the input, in the order
they first appeared. A character is considered unique if it appears exactly once in the
input string.
*/

function findUniqueCharacters(str) {
    let charCount = {};
    let unique = "";
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: build a string with characters that appear exactly once
    for (let char of str) {
        if (charCount[char] === 1) {
            unique += char;
        }
    }
    console.log(unique);
}

findUniqueCharacters("bubble");