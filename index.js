function isPalindrome(word) {
  return word.split("").reverse().join("") === word;
}

/* 
  Add your pseudocode here
  function isPalindrome(word) {
  let reversedArray = [];

  for (let i = word.split("").length - 1; i >= 0; i--) {
    reversedArray.push(word.split("")[i]);
  }

  if (reversedArray.join("") === word)
    return true;
  else
    return false;
}
*/

/*
  Add written explanation of your solution here
  If the letters of the word are equal to the inverted word, return it true. Other than that is false:
  1) Take the word to convert it into an array of letters using split("").
  2) Then reverse the array using reverse().
  3) And finally, convert the array to a word using join("").
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
