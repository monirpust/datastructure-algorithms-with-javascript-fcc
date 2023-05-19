function steamrollArray(arr) {
  let flattened = [].concat(...arr);
  //console.log(flattened);
  return flattened.some(Array.isArray) ? steamrollArray(flattened): flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);