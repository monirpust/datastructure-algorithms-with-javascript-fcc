function sumFibs(num) {
  let fibs = [1, 1];
  let fibNumber;
  let count = 0;

  while(num > count)
  {
    fibNumber = fibs[count] + fibs[count+1];

    if(fibNumber <= num)
    {
      //console.log(fibNumber);
      fibs.push(fibNumber);
    }

    count++;
  }
  return fibs.filter(n => n % 2 !== 0).reduce((a, i) => a+i);
}

console.log(sumFibs(1000));