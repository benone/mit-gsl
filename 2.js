/**

  =============== Coding Test 2 ================
  Compute all permutations of a string and its sub-strings. 
  For example, given a string `s` such as "abc", it should output a list/array of strings [“a”, “b”, “c”, “ab”, “ba”, “ac”, “ca”, “bc”, “cb”, “abc”, “acb”, “bac”, “bca”, “cab”, “cba”].
  For extra credit, play with this. Try to optimize your code for efficiency in speed and memory (we will be testing on large strings and the faster it goes, the better).
  Hint: Recursion is your friend here!

*/

function generatePermutations(inputString){

  function doPermutation(charsArray, takenCharsArray) {
    var takenCharsArray = takenCharsArray || [];

    for (var i = 0; i < charsArray.length; i++) {
      
      // take i-char from input chars array
      var currentChar = charsArray.splice(i, 1)[0];
      
      // fill temp chars array (our permutation)
      var tempCharsArray = takenCharsArray.concat([currentChar])

      // Add tempCharsArray to results
      results.push(tempCharsArray.join(""));

      // do permutation for copy of charsArray
      doPermutation(charsArray.slice(), tempCharsArray);
    
      // insert back current char
      charsArray.splice(i, 0, currentChar);
    }
    return results;
  }

  var results = [];
  return doPermutation(inputString.split(""))
}

generatePermutations("abc")