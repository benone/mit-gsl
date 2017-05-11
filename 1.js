/**

  ================ Coding Test 1 ================
  Encrypt a given message `s` by substituting each letter in the message by another letter `n` steps away in the alphabet.
  For example, "hello" with n=5 becomes "mjqqt" as "m" is 5 letters down the alphabet from "h", "e" is 5 letters down the alphabet from "j", etc . 
  You may need to wrap around the alphabet for letters such as "z". In this case, "z" would map to the letter "e".
  For extra credit, make this function work case sensitively. In other words being able to transpose both upper and lower case letters.
  Comment and organize your code well. Your code should take `s` and `n` as inputs (in this order) and output the encrypted message.
  Javascript code

*/

function encryptMessage(inputString, lettersShift) {

  if (lettersShift > 26 || lettersShift < 0)
    throw "Invalid shift";

  var upcaseFirstCode = "A".charCodeAt(),     // 65
    upcaseLastCode = "Z".charCodeAt(),     // 90
    lowercaseFirstCode = "a".charCodeAt(), // 97
    lowercaseLastCode = "z".charCodeAt(), // 122
    totalCharsCount = 26;
  
  var chars = inputString.split('').map(function(char){
    
    var currentCharCode = char.charCodeAt(),
      newCharCode = currentCharCode + lettersShift;

    // current char code out of ranges (lower and uppercase)
    if (currentCharCode < upcaseFirstCode || (currentCharCode > upcaseLastCode && currentCharCode < lowercaseFirstCode) || currentCharCode > lowercaseLastCode)
      return " ";

    // shifting to beginning if new char code is upcase and out of range
    if (newCharCode > upcaseLastCode && newCharCode < lowercaseFirstCode)
      newCharCode -= totalCharsCount;

    // shifting to beginning if new char code is lowercase and out of range
    if (newCharCode > lowercaseLastCode)
      newCharCode -= totalCharsCount;
    
    return String.fromCharCode(newCharCode);
  })
  return chars.join("");
}

encryptMessage("hello HELLO!", 5)
