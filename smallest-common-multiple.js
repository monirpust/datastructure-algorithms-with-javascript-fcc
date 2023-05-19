function lcm(num1, num2)
{
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  for(let i = max; i <= min*max; i += max)
  {
    if(i % min == 0) return i;
  }

}

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let scm = lcm(...arr);

  for(let j = min; j <= max; j++)
  {
    if(scm % j != 0)
    {
      scm = lcm(scm, j);
    }
  }
  return scm;

}

console.log(smallestCommons([1,13]));