// How to sort objects

let list = { "bat": 44, "cow": 14, "bird": 23, "bear": 5 },
  associativeArray = [];

for (var animal in list) {
  associativeArray.push([animal, list[animal]]);
}

associativeArray.sort(function (a, b) {
  return a[1] - b[1];
});
