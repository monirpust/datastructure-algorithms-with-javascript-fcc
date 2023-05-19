function binaryAgent(str) {
  str = str.split(" ");
  
  for(let i = 0; i < str.length; i++)
  {
    str[i] = parseInt(str[i],2);
  }
  //console.log(String.fromCharCode(...str));
  return String.fromCharCode(...str);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");