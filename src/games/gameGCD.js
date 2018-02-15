import { cons } from 'hexlet-pairs';
import { random } from '../mathFunctions';
import startGameEngine from '..';

const task = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const a = random(1, 10);
  const b = random(1, 10);

  const question = `${a} ${b}`;

  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }

    const remainder = num1 % num2;

    return gcd(num2, remainder);
  };

  const answer = String(gcd(a, b));

  const gamePair = cons(question, answer);

  return gamePair;
};
export default () => {
  startGameEngine(task, gameData);
};
