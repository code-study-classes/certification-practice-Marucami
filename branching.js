function incrementIfPositive(number) {
  if (number > 0) {
    return number + 1;
  }
  return number;
}

function getIndexOfSmallerNumber(number1, number2) {
  if (number1 < number2) {
    return 1;
  } if (number2 < number1) {
    return 2;
  }
  return 1;
}

function findMiddleNumber(number1, number2, number3) {
  if ((number1 >= number2 && number1 <= number3) || (number1 >= number3 && number1 <= number2)) {
    return number1;
  }
  if ((number2 >= number1 && number2 <= number3) || (number2 >= number3 && number2 <= number1)) {
    return number2;
  }
  return number3;
}

function findUniqueNumber(number1, number2, number3, number4) {
  if (number1 !== number2 && number1 !== number3 && number1 !== number4) {
    return 1;
  } if (number2 !== number1 && number2 !== number3 && number2 !== number4) {
    return 2;
  } if (number3 !== number1 && number3 !== number2 && number3 !== number4) {
    return 3;
  }
  return 4;
}

function calculateF(x) {
  if (x < 0) {
    return 0;
  } if (x >= 0 && x < 1) {
    return 1;
  } if (x >= 1 && x < 2) {
    return -1;
  }
  return calculateF(x - Math.floor(x));
}

function describeNumber(n) {
  if (n >= 1 && n <= 9) {
    return 'нечетное однозначное число';
  } if (n >= 10 && n <= 99) {
    return n % 2 === 0 ? 'четное двузначное число' : 'нечетное двузначное число';
  } if (n >= 100 && n <= 999) {
    return n % 2 === 0 ? 'четное трехзначное число' : 'нечетное трехзначное число';
  }
  return 'Number is out of range';
}

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'monday';
    case 2:
      return 'tuesday';
    case 3:
      return 'wednesday';
    case 4:
      return 'thursday';
    case 5:
      return 'friday';
    case 6:
      return 'saturday';
    case 7:
      return 'sunday';
    default:
      return 'Invalid day number.';
  }
}

function convertToMeters(unitNumber, lengthInUnits) {
  switch (unitNumber) {
    case 1:
      return lengthInUnits * 0.1;
    case 2:
      return lengthInUnits * 1000;
    case 3:
      return lengthInUnits;
    case 4:
      return lengthInUnits * 0.001;
    case 5:
      return lengthInUnits * 0.01;
    default:
      return 0;
  }
}

function describeAge(age) {
  switch (age) {
    case 20:
      return 'двадцать лет';
    case 21:
      return 'двадцать один год';
    case 22:
      return 'двадцать два года';
    case 23:
      return 'двадцать три года';
    case 24:
      return 'двадцать четыре года';
    case 25:
      return 'двадцать пять лет';
    case 26:
      return 'двадцать шесть лет';
    case 27:
      return 'двадцать семь лет';
    case 28:
      return 'двадцать восемь лет';
    case 29:
      return 'двадцать девять лет';
    case 30:
      return 'тридцать лет';
    case 31:
      return 'тридцать один год';
    case 32:
      return 'тридцать два года';
    case 33:
      return 'тридцать три года';
    case 34:
      return 'тридцать четыре года';
    case 35:
      return 'тридцать пять лет';
    case 36:
      return 'тридцать шесть лет';
    case 37:
      return 'тридцать семь лет';
    case 38:
      return 'тридцать восемь лет';
    case 39:
      return 'тридцать девять лет';
    case 40:
      return 'сорок лет';
    case 41:
      return 'сорок один год';
    case 42:
      return 'сорок два года';
    case 43:
      return 'сорок три года';
    case 44:
      return 'сорок четыре года';
    case 45:
      return 'сорок пять лет';
    case 46:
      return 'сорок шесть лет';
    case 47:
      return 'сорок семь лет';
    case 48:
      return 'сорок восемь лет';
    case 49:
      return 'сорок девять лет';
    case 50:
      return 'пятьдесят лет';
    case 51:
      return 'пятьдесят один год';
    case 52:
      return 'пятьдесят два года';
    case 53:
      return 'пятьдесят три года';
    case 54:
      return 'пятьдесят четыре года';
    case 55:
      return 'пятьдесят пять лет';
    case 56:
      return 'пятьдесят шесть лет';
    case 57:
      return 'пятьдесят семь лет';
    case 58:
      return 'пятьдесят восемь лет';
    case 59:
      return 'пятьдесят девять лет';
    case 60:
      return 'шестьдесят лет';
    case 61:
      return 'шестьдесят один год';
    case 62:
      return 'шестьдесят два года';
    case 63:
      return 'шестьдесят три года';
    case 64:
      return 'шестьдесят четыре года';
    case 65:
      return 'шестьдесят пять лет';
    case 66:
      return 'шестьдесят шесть лет';
    case 67:
      return 'шестьдесят семь лет';
    case 68:
      return 'шестьдесят восемь лет';
    case 69:
      return 'шестьдесят девять лет';
    default:
      return 'Неподдерживаемый возраст';
  }
}

function describeNumber2(number) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  let result = '';

  switch (hundreds) {
    case 1:
      result += 'сто';
      break;
    case 2:
      result += 'двести';
      break;
    case 3:
      result += 'триста';
      break;
    case 4:
      result += 'четыреста';
      break;
    case 5:
      result += 'пятьсот';
      break;
    case 6:
      result += 'шестьсот';
      break;
    case 7:
      result += 'семьсот';
      break;
    case 8:
      result += 'восемьсот';
      break;
    case 9:
      result += 'девятьсот';
      break;
    default:
      break;
  }

  switch (tens) {
    case 1:
      switch (ones) {
        case 0:
          result += ' десять';
          break;
        case 1:
          result += ' одиннадцать';
          break;
        case 2:
          result += ' двенадцать';
          break;
        case 3:
          result += ' тринадцать';
          break;
        case 4:
          result += ' четырнадцать';
          break;
        case 5:
          result += ' пятнадцать';
          break;
        case 6:
          result += ' шестнадцать';
          break;
        case 7:
          result += ' семнадцать';
          break;
        case 8:
          result += ' восемнадцать';
          break;
        case 9:
          result += ' девятнадцать';
          break;
        default:
          break;
      }
      return result;
    case 2:
      result += ' двадцать';
      break;
    case 3:
      result += ' тридцать';
      break;
    case 4:
      result += ' сорок';
      break;
    case 5:
      result += ' пятьдесят';
      break;
    case 6:
      result += ' шестьдесят';
      break;
    case 7:
      result += ' семьдесят';
      break;
    case 8:
      result += ' восемьдесят';
      break;
    case 9:
      result += ' девяносто';
      break;
    default:
      break;
  }

  if (tens !== 1) {
    switch (ones) {
      case 1:
        result += ' один';
        break;
      case 2:
        result += ' два';
        break;
      case 3:
        result += ' три';
        break;
      case 4:
        result += ' четыре';
        break;
      case 5:
        result += ' пять';
        break;
      case 6:
        result += ' шесть';
        break;
      case 7:
        result += ' семь';
        break;
      case 8:
        result += ' восемь';
        break;
      case 9:
        result += ' девять';
        break;
      default:
        break;
    }
  }

  return result.trim();
}

export {
  incrementIfPositive, getIndexOfSmallerNumber, findMiddleNumber, findUniqueNumber,
  calculateF, describeNumber, convertToMeters, describeAge, describeNumber2, getDayName,
};
