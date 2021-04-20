let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
let valueToFind = 12;
while (array.length > 1) {
  //find the middle
  let middle = Math.floor((0 + array.length) / 2);
  //compare middle to valueToFind
  if (array[middle] > valueToFind) {
    //chop off the right side
    array.splice(middle, middle);
  } else {
    //chop off the left side
    array.splice(0, middle);
  }
}
if (array[0] == valueToFind) {
  console.log(true, array[0]);
} else {
  console.log(false, array[0]);
}