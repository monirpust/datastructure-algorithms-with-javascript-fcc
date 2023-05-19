function addTogether() {
  let arr = [...arguments];
  console.log(arr);
  if(arr.some(element => typeof element !== "number"))
  {
    return undefined;
  }
  else if(arr.length == 1)
  {
    return function addSecondArg(num2){
      return addTogether(arr[0], num2);
    }
  }
  return arr[0] + arr[1];
}

console.log(addTogether(2)(3));