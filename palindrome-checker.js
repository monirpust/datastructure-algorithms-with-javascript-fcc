function palindrome(str) {
  
  str = str.replace(/\W|_/gi,"").toLowerCase();
  let length = str.length;
  for(let i = 0; i < length/2; i++)
  {
    //console.log(str[i])
    if(str[i] !== str[length-i-1])
    {
      return false;
    }
  }
  return true;
}

console.log(palindrome("My age is 0, 0 si ega ym."));