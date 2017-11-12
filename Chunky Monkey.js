/*
Hint: 1
The links above suggest to use Array.push(), so let’s start by first creating a new array to store the smaller arrays we will soon have like this:

var newArray = [];
try to solve the problem now
:speech_balloon: Hint: 2
Next we’ll need a for loop to loop through arr.

try to solve the problem now
:speech_balloon: Hint: 3
Finally, we need a method to do the actual splitting and we can use Array.slice() to do that.
The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.push() all work together.

try to solve the problem now
*/


function chunkArrayInGroups(arr, size) {
  // Break it up.
var newArr = [];
var num = 0;
  console.log("Array Length is: "+arr.length);
for (var i = 0; i < arr.length; i+=size) {
  newArr.push(arr.slice(num,num+size));
  num += size;

  //console.log(newArr);
  //console.log(newArr);
}
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
