/*Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArray = [];
  console.log(arr.legnth);

  if (howMany > arr.length){
    return newArray;
  } for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);

    newArray = arr.slice(howMany);
  }

  return newArray;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
