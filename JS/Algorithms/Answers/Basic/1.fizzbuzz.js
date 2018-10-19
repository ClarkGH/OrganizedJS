// How to fizzbuzz and so can you

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizzbuzz";
  } else if (num % 3 === 0){
    return "Fizz";
  } else if (num % 5 === 0){
    return "Buzz";
  }
}