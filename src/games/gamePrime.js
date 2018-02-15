import { cons } from 'hexlet-pairs';
import { random, isPrime } from '../mathFunctions';
import startGameEngine from '..';

const task = 'Is this number prime?';

const gameData = () => {
  const randomNum = random(1, 100);
  const question = randomNum;

  const answer = isPrime(question) ? 'yes' : 'no';

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
