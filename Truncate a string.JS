
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var trunk = '';
  var dots = '...';

  if(str.slice(0, num).length <= 3){
    trunk = str.slice(0, num) + dots;


  } else if (str.length <= num){

    trunk = str;

  } else {
    trunk = str.slice(0, num - 3) + dots;
  }
  console.log(trunk);
  return trunk;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
