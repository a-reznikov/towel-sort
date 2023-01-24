
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix);
  let newArray = [];
  let sortArray = [];
  for (arrays in matrix) {
    console.log(arrays);
    if (arrays % 2 === 0) {
      sortArray.push(matrix[arrays]);
      // console.log(arrays, ":", matrix[arrays])
    } else {
      sortArray.push(matrix[arrays].sort((a, b) => b - a));
    }
    // console.log(arrays);
    // matrix[arrays].forEach(element => {
    //   newArray.push(element);
    // });
  }
  for (arrays in sortArray) {
    sortArray[arrays].forEach(element => {
    newArray.push(element);
    });
  }
  // console.log(sortArray);
  // console.log(newArray);
  return newArray;
}
