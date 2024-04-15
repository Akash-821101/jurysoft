function reverseDigits(x) {
  let maxValue = Math.pow(2, 31) - 1;
  let minValue = -Math.pow(2, 32);

  let digits = x.toString().split("");
  let reverseDigits = digits.reverse();

  let result = parseInt(reverseDigits.join(""));

  if (x < 0) {
    result *= -1;
  }

  if (x > maxValue || x < minValue) {
    return 0;
  }

  return result;
}
