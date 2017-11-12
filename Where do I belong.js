function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
var newArray = arr;
newArray.push(num);
console.log(newArray);

var sortedArr = newArray.sort(function(a,b){
  return a - b;
});
console.log(sortedArr);

for (var i = 0; i < sortedArr.length; i++) {
  if (num === sortedArr[i]) {
  return sortedArr.indexOf(sortedArr[i]);
  }
}

}
getIndexToIns([40, 60], 50);
