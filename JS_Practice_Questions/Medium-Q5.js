/**
Write a JavaScript function named isPalindrome that checks if a given string is a
palindrome. A palindrome is a word, phrase, number, or other sequences of characters
that reads the same forward and backward (ignoring spaces, punctuation, and
capitalization). The function should return true if the input string is a palindrome and
false otherwise.
*/

function isPalindrome(str) {
  newStr = str.toLowerCase();
  console.log(newStr);
  let emptyStr = "";
  let reverseStr = "";

  for (let i = 0; i < newStr.length; i++) {
    if (
      newStr[i] !== " " &&
      newStr[i] !== "'" &&
      newStr[i] !== "." &&
      newStr[i] !== "!" &&
      newStr[i] !== "#" &&
      newStr[i] !== "@" &&
      newStr[i] !== ","
    ) {
      emptyStr += newStr[i];
    }
  }

  console.log(emptyStr);

  for(let j = str.length -1; j>-1; j--){
    if (
        newStr[j] !== " " &&
        newStr[j] !== "'" &&
        newStr[j] !== "." &&
        newStr[j] !== "!" &&
        newStr[j] !== "#" &&
        newStr[j] !== "@" &&
        newStr[j] !== ","
      ){
        reverseStr += newStr[j];
      }
  }

  console.log(reverseStr);
  console.log(emptyStr == reverseStr);

}

isPalindrome("A man, a plan, a canal, Panama");
isPalindrome("");
isPalindrome("a");
isPalindrome("Madam, I'm Adam.");
isPalindrome("ab");
isPalindrome("12321! #@!12321");
isPalindrome("javascript");
isPalindrome("!!a!!!a!");

