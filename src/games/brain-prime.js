import { cons } from 'hexlet-pairs';
import { random, isPrime, answerYesNo } from '../mathLib';
import startGameEngine from '..';

const task = 'Is this number prime?';

const gameData = () => {
  const randomNum = random(1, 100);
  const question = randomNum;

  const answer = answerYesNo(isPrime);

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
