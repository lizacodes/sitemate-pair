// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const numbersAsWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
  };
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const [hours, minutes] = time.split(":");

  // TODO: 15, 30, 45 minutes

  if (minutes === "00") {
    return `${numbersAsWords[hours]} o'clock`;
  }

  if (parseInt(minutes, 10) <= 30) {
    return `${numbersAsWords[parseInt(minutes, 10).toString()]} past ${numbersAsWords[hours]}`;
  } else {
    return `${numbersAsWords[(60 - parseInt(minutes, 10)).toString()]} to ${
      numbersAsWords[(parseInt(hours, 10) + 1).toString()]
    }`;
  }

  return "half past eight";
}

module.exports = { convertTimeToWords };
