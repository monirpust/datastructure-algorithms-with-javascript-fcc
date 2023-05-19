function dropElements(arr, func) {
  let len = arr.length;
  for(let i = 0; i < len; i++)
  {
    if(!func(arr[0]))
    {
      arr.shift();
    }  
    else
    {
      return arr;
    }
  }

  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));