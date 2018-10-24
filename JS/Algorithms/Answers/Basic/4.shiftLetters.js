// Create a function that shifts each letter up the n amount upwards in the alphabet. We will not account for special characters instead of spaces

function letterShifter (str, num) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    lowerCaseStr = str.toLowerCase(),
    answer = '',
    newNum = num % 26;
  
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currChar = lowerCaseStr[i];

    if (currChar === ' ') {
      answer += currChar;
      continue;
    }

    let alphaIndex = alphabet.indexOf(currChar),
      updatedAlphaIndex = alphaIndex + newNum;
    
    if (updatedAlphaIndex > 25) {
      updatedAlphaIndex -= 26;
    }

    if (updatedAlphaIndex < 0 ) {
      updatedAlphaIndex += 26;
    }

    if (str[i] === str[i].toUpperCase()) {
      answer += alphabet[updatedAlphaIndex].toUpperCase();
    } else {
      answer += alphabet[updatedAlphaIndex];
    }
  }

  return answer;
}