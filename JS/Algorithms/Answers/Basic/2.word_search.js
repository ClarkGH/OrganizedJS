// Create a function that will check to see if all of the words in the first string exist in the second

function wordHunt (str1 = '', str2 = '') {
  if (str1 === '' || str2 === '') {
    return false;
  }

  let map = new Map(),
    str1Arr = str1.split(' '),
    str2Arr = str2.split(' ');

  for (let i = 0; i < str2Arr.length; i++) {
    if (map[str2Arr[i]] === undefined) {
      map[str2Arr[i]] = 0;
    }
    map[str2Arr[i]]++;
  }

  for (let j = 0; j < str1Arr.length; j++) {
    if (map[str1Arr[j]] !== undefined && map[str1Arr[j]] > 0) {
      map[str1Arr[j]]--;
    } else {
      return false;
    }
  }
  return true;
}