// Create a function that will check to see if all of the words in the first string exist in the second

function wordHunt (str1 = '', str2 = '') {
  if (str1 === '' || str2 === '') {
    return false;
  }

  let map = new Map(),
    str1Arr = str1.split(' '),
    str2Arr = str2.split(' ');

  // use get/set with a Map, map[word] would read Map's own properties (try the word 'constructor')
  for (let i = 0; i < str2Arr.length; i++) {
    map.set(str2Arr[i], (map.get(str2Arr[i]) || 0) + 1);
  }

  for (let j = 0; j < str1Arr.length; j++) {
    let count = map.get(str1Arr[j]);
    if (count > 0) {
      map.set(str1Arr[j], count - 1);
    } else {
      return false;
    }
  }
  return true;
}