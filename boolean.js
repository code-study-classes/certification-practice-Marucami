function isPositive(A) {
  return A > 0;
}

function isOdd(A) {
  return A % 2 !== 0;
}

function checkInequality(A, B) {
  return A > 2 && B <= 3;
}

function checkInequality2(A, B) {
  return A >= 0 || B < -2;
}

function checkBetweenNumbers(A, B, C) {
  return A < B && B < C;
}

function checkOddThreeDigitNumber(number) {
  const numberStr = number.toString();
  return numberStr.length === 3 && number % 2 !== 0;
}

function checkUniqueDigits(number) {
  if ((number < 100 || number > 999) && (number > -100 || number < -999)) {
    return false;
  }
  const numberStr = Math.abs(number).toString();

  for (let i = 0; i < numberStr.length; i += 1) {
    for (let j = i + 1; j < numberStr.length; j += 1) {
      if (numberStr[i] === numberStr[j]) {
        return false;
      }
    }
  }

  return true;
}

function isSecondQuadrant(x, y) {
  return x < 0 && y > 0;
}

function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  return a === b || b === c || a === c;
}

function areSameColorFields(x1, y1, x2, y2) {
  const sum1 = x1 + y1;
  const sum2 = x2 + y2;
  const diff1 = Math.abs(x1 - y1);
  const diff2 = Math.abs(x2 - y2);

  return sum1 % 2 === sum2 % 2 && diff1 % 2 === diff2 % 2;
}

export {
  isPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers,
  checkOddThreeDigitNumber,
  checkUniqueDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields,
};
