/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/



function bouncer(arr) {
//Creating a new array
  var newArray = [];
// arr.filter(Boolean) <== This filters out booleans from the array passed in the function
  newArray = arr.filter(Boolean);
// Adds the filtered array to the new array
  return newArray
//Calls the new array
}

/*
OR
*/

function bouncer(arr) {
/*Filters the array passed through the function
then returns the filtered array.
*/
  alert(arr.filter(Boolean));
}
