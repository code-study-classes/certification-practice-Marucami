function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

function calculateSegmentProduct(A, B, C) {
  return (C - A) * (B - C);
}

function calculateKilobytes(bytes) {
  return Math.floor(bytes / 1024);
}

function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

function calculateDigitSum(num) {
  const arr = num.toString();
  const count = parseInt(arr[0], 10) + parseInt(arr[1], 10);
  return count;
}

function swapHundredsAndTens(threeDigitNumber) {
  const arr = threeDigitNumber.toString();
  const number = arr[1] + arr[0] + arr[2];
  return parseInt(number, 10);
}

function getHundredsDigit(number) {
  if (number > 999) {
    return Math.trunc(number / 100) % 10;
  }

  return 0;
}

function getFullHours(seconds) {
    if (typeof seconds !== 'number' || seconds < 0 || !Number.isInteger(seconds)) {
      throw '';
    }
  
    return Math.floor(seconds / 3600);
  }

function getDayOfWeek(dayOfYear) {
  return (dayOfYear - 1 + 1) % 7;
}

function countSquares(A, B, C) {
  return Math.floor(A / C) * Math.floor(B / C);
}

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments,
  calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek,
  countSquares,
};
