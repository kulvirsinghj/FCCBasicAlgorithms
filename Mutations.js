/*Return true if the string in the first element of the array contains all of
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the
letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the
string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters
in "line" are present in "Alien".

Hint: 1
If everything is lowercase it will be easier to compare.
try to solve the problem now
Hint: 2
Our strings might be easier to work with if they were arrays of characters.
try to solve the problem now
Hint: 3
A loop might help. Use indexOf() to check if the letter of the second word is on the first.
*/

function mutation(arr) {

  var targetWord = arr[0].toLowerCase();
  var testWord = arr[1].toLowerCase();
console.log("Test word length: "+testWord.length);
console.log("Test word: "+testWord);


for (var i = 0; i < testWord.length; i++) {
  console.log("Test word in the loop: "+testWord[i]);
  console.log(targetWord.indexOf(testWord[i]));
  if (targetWord.indexOf(testWord[i]) === -1)
      return false;
  }
  return true;
}
mutation(["Free Code Camp", "ckmp"]);
