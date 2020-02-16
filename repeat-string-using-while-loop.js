// challenge: write a function that takes two arguments, a string and number
// have function return a single string that contains the original string,
// repeated the number of times specified by the second argument, 
// or an empty string if the number is negative  

function repeatString(str, num) {
    var finalString = '';
    if (num <= 0){
      return finalString;
    }
    while ( num > 0 ){
      finalString += str;
      num--;
    }
    return finalString
  }
  
  console.log(repeatString('car', 4));
  console.log(repeatString('bar', 3));