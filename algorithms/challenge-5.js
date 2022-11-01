function filterList(arr) {
    var filteredlist = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      filteredlist.push(arr[i]);
    }
  }
  return filteredlist;
 
 }

  module.exports =filterList