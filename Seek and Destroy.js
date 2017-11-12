/*Hint: 1
You need to work with arguments as if it was a regular array. The best way is to convert it into one.

Hint: 2
You need to filter, this also means you need to create a callback function.
You can use various methods like: indexOf(), includes().
If you need another approach, reduce() might also be of use; keep reading those docs!

Hint: 3
To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments);
*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments)
  // Remove all the values

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < args.length; j++) {
    if (arr[i] === args[j]) {
        delete  arr[i]
    }
  }
}
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
