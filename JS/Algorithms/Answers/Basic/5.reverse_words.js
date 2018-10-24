// reverse every word in a given string
// every word must stay in place e.g "hi mom" will become "ih mom"
// do not use array.reverse()

// O(n^2)
function reverseWordsInOrder (str) {
  let strArr = str.split(' '),
    answer = '';

  for (let i = 0; i < strArr.length; i++) {
    answer += reverseStr(strArr[i]);
    if (i !== strArr.length - 1) {
      answer += ' ';
    }
  }

  return answer;
}

function reverseStr(str) {
  return str ? reverseStr(str.substr(1)) + str[0] : str
}

// All lower case
reverseWordsInOrder('do you know the muffin man')