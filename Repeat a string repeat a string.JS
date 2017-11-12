/*
Hint: 1
You can’t edit strings, you will need to create a variable to store the new string.
Hint: 2
Create a loop to repeat the code as many times as needed.
Hint: 3
Make the variable created store the current value and append the word to it.
*/


function repeatStringNumTimes(str, num) {
  // repeat after me
var repeated = '';

for (var i = 0; i < num; i++) {
  repeated += str;
}

console.log(repeated);


  return repeated;
}

repeatStringNumTimes("abc", 3);
