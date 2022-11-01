function calculateGrade(marks) {
    let totalScore = 0;
  let divisor = arr.length;
  for (number of arr) {
    totalScore += parseInt(number);
  }
  averagescore = totalScore / divisor;
  if (averagescore <= 49) {
    return "F";
  } else if (averagescore <= 59) {
    return "E";
  } else if (averagescore <= 69) {
    return "D";
  } else if (averagescore <= 79) {
    return "C";
  } else if (averagescore <= 89) {
    return "B";
  } else if (averagescore <= 100) {
    return "A";
  }

  return averagescore;
 
 }
  module.exports =calculateGrade
