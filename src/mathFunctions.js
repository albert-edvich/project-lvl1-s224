export const random = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = n => n % 2 === 0;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  const remainder = a % b;

  return gcd(b, remainder);
};

export const balancer = (n) => {
  const iter = (acc, sumOfDigits, numOfDigits) => {
    if (numOfDigits === 0) {
      return acc;
    }
    const newNum = (sumOfDigits - (sumOfDigits % numOfDigits)) / numOfDigits;

    return iter(acc + newNum, sumOfDigits - newNum, numOfDigits - 1);
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
