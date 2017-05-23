//	Sum All Numbers in a Range
function sumAll(arr) {
  var newArr = [];
  var sub = Math.abs((arr[1]- arr[0]));
  for(var i = 0; i <= sub; i++) {
    newArr.push(i + Math.min(...arr));
  }
  return newArr.reduce((total, item) => total + item, 0);
}
sumAll([5, 10]);

//	