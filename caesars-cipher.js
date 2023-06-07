function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedStr = "";
  for(let i = 0; i < str.length; i++)
  {
    if(alphabet.indexOf(str[i]) >= 13)
    {
      decodedStr += alphabet[alphabet.indexOf(str[i]) - 13];
    }
    else if(alphabet.indexOf(str[i]) <= 13 && alphabet.indexOf(str[i]) > -1)
    {
      decodedStr += alphabet[alphabet.indexOf(str[i]) + 13];
    }
    else
    {
      decodedStr += str[i];
    }
  }

  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));