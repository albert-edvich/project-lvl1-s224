export const random = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = (n) => n % 2 === 0;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  const remainder = a % b;

  return gcd(b, remainder);
};

export const balance = (n) => {
  const iter = (balancedStr, sumOfDigits, numOfDigits) => {
    if (numOfDigits === 0) {
      return balancedStr;
    }
    const newNum = (sumOfDigits - (sumOfDigits % numOfDigits)) / numOfDigits;

    return iter(balancedStr + newNum, sumOfDigits - newNum, numOfDigits - 1);
  };

  const sumOfDigits = (index, numAcc) => {
    const numToString = String(n);

    const strLength = numToString.length;

    if (index >= strLength) {
      return iter('', numAcc, strLength);
    }

    const item = Number(numToString[index]);

    return sumOfDigits(index + 1, numAcc + item);
  };

  return sumOfDigits(0, 0);
};

export const isPrime = (n) => {
  const iter = (div) => {
    if (n < 2 || n % div === 0) {
      return false;
    }
    if (div === n) {
      return true;
    }
    return iter(div + 1);
  };
  return iter(2);
};

export const answerYesNo = (fn) => (fn ? 'yes' : 'no');
