function sumPrimes(num) {
  const primeNums = [];
  let prime = 1;
  for(let i = 2; i <= num; i++)
  {
    prime = 1;
    for(let j = 2; j < i; j++)
    {
      if(i % j == 0)
      {
        prime = 0;
        break;
      }
    }

    if(prime == 1) primeNums.push(i);
  }

  return primeNums.reduce((sum, i) => sum + i);
}

console.log(sumPrimes(10));