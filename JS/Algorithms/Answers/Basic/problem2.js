// Find the most frequently recurring number in an array
function mostRecurringNum(arr){
  let numMap = {},
    answerFrequency = 0,
    answer;
  
  for (let i = 0; i < arr.length; i++){
    if (numMap[arr[i]]) {
      numMap[arr[i]]++;
    } else {
      numMap[arr[i]] = 1;
    }
  }

  for (let num in numMap) {
    if (numMap[num] > answerFrequency) {
      answer = num;
      answerFrequency = numMap[num];
    }
  }
  return answer;
}