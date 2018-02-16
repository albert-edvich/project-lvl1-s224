import { cons } from 'hexlet-pairs';
import { random, balance } from '../mathLib';
import startGameEngine from '..';

const task = 'Balance the given number.';

const gameData = () => {
  const randomNum = random(10, 9999);
  const question = randomNum;

  const answer = balance(question);

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
