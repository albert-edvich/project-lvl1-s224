import { cons } from 'hexlet-pairs';
import { random, gcd } from '../mathLib';
import startGameEngine from '..';

const task = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const a = random(1, 10);
  const b = random(1, 10);

  const question = `${a} ${b}`;

  const answer = String(gcd(a, b));

  const gamePair = cons(question, answer);

  return gamePair;
};
export default () => {
  startGameEngine(task, gameData);
};
