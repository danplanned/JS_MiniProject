/** 
Create a function findLongestWord that accepts a string as input and returns the longest
word in the string. Assume the string will only contain words separated by spaces and
no punctuation or special characters. In case of a tie, return the word that appears first.
*/

function findLongestWord(sentence) {
    // Your code here
    let longestWord = "";
    let checkWord = "";
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] !== " "){
            checkWord += sentence[i];
        }
        if((sentence[i] === " ") || (i === sentence.length-1)){
            if(checkWord.length > longestWord.length){
                longestWord = checkWord;
            }
            checkWord = "";
        }
    }
    console.log(longestWord);

}

findLongestWord("The quick brown fox is jumping over the lazy dog");
findLongestWord("Sustainability encompasses various initiatives and strategies to maintain ecological balance.");
findLongestWord("An exploration of quantum computing reveals intricacies within computational theories.");
findLongestWord("Innovative technological advancements revolutionize traditional methodologies in various sectors.");
findLongestWord("Understanding the complexities of neural networks requires a deep dive into artificial intelligence.");
findLongestWord("The philosophical implications of virtual reality technology challenge our perception of existence.");
findLongestWord("one more");
findLongestWord("");

