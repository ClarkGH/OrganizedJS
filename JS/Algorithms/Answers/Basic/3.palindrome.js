function isPalindrome(str) {
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    chunk = str.toLowerCase(),
    charArr = chunk.split(''),
    answerArr = [];
  
    charArr.forEach( char => {
      if (validChars.indexOf(char) > -1) {
        answerArr = [...answerArr, char];
      }
    });

    return answerArr.join('') === answerArr.reverse().join('');

}

isPalindrome('Madam, I\'m Adam');
isPalindrome('I have no friends');