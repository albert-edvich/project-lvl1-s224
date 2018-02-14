import { cons } from 'hexlet-pairs';
import random from '../random';

export default () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const a = random();
  const b = random();
  const gameQuestion = `${a} ${b}`;

  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }

    const remainder = num1 % num2;

    return gcd(num2, remainder);
  };

  const correctAnswer = String(gcd(a, b));

  const gameData = cons(gameTask, cons(gameQuestion, correctAnswer));

  return gameData;
};
