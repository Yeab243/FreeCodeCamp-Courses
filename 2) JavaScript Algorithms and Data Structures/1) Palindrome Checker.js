function palindrome(str) {
  str = str.replace(/\W|_/g, "").toLowerCase();

  let reverse = str.split("").reverse().join("");
  if (str=== reverse){
    return true
  } else {
    return false
  }
  
  
  return true;
}

console.log(palindrome("eye"));
