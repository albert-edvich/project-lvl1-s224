import { cons } from 'hexlet-pairs';
import { random, balancer } from '../mathFunctions';
import startGameEngine from '..';

const task = 'Balance the given number.';

const gameData = () => {
  const randomNum = random(10, 9999);
  const question = randomNum;

  const answer = balancer(question);

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
