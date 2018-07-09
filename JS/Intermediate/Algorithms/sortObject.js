// How to sort objects
// Object.keys(objectSorted).sort(sortingcallback())

let list = { "bat": 44, "cow": 14, "bird": 23, "bear": 5 };
let sortedKeys = Object.keys(list).sort(function (a, b) { 
  return list[a] - list[b] 
});

console.log(sortedKeys);     