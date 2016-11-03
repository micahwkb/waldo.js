function findWaldo(arr, found) {
  arr.forEach(function(item, i) {
    if (item.toLowerCase() === "waldo") {
      found(i);
    }
  });
}
// pseudo!
// with given array and "found" function,
// for each item in given array,
// check whether item = waldo
// execute found


function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

var nameArray = ["Alice", "Bob", "Waldo", "waldo", "Winston"];

findWaldo(nameArray, actionWhenFound);

