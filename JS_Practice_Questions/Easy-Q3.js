/**
Develop a function countVowelsAndConsonants that accepts a string as input and
returns an object with two properties: vowels and consonants. The properties should
count the number of vowels and consonants in the string, respectively. Assume the
string will only contain lowercase or uppercase letters and no spaces or special
characters.
 */

function countVowelsAndConsonants(inputString) {
  let newString = inputString.toLowerCase();
  let vowels = 0;
  console.log("\n" + newString);
  for (let i = 0; i < inputString.length; i++) {
    switch (newString[i]) {
      case "a":
        vowels++;
        break;

      case "e":
        vowels++;
        break;

      case "i":
        vowels++;
        break;

      case "o":
        vowels++;
        break;

      case "u":
        vowels++;
        break;
    }
  }

  let consonants = inputString.length - vowels;

  console.log(`vowels: ${vowels} consonants: ${consonants}`);
}

countVowelsAndConsonants("javascript");
countVowelsAndConsonants("ProgrammingInJavaScript");
countVowelsAndConsonants("ExampleOfMixedCase");
countVowelsAndConsonants("FUNCTIONALprogramming");
countVowelsAndConsonants("DataStructuresAndAlgorithms");
countVowelsAndConsonants("UnderstandingComplexity");
countVowelsAndConsonants("AbstractSyntaxTreeAnalysis");
countVowelsAndConsonants("hkjahkdjsaidewyHHSAKHAvasldjasbbvAASS");
countVowelsAndConsonants("");
countVowelsAndConsonants("aeiou");
