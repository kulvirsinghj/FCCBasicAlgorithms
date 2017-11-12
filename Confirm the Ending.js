function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLen = target.length;
  console.log("Target's Length: " + targetLen);

  var strLen = str.length;
  console.log("String Length: " + strLen);

  var strTar = str.substring(strLen - targetLen);

  console.log("String Target: " + strTar);

if (strTar === target) {
  return true;
} else {
  return false;
}

}

confirmEnding("Bastian", "n");
