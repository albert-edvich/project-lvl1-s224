import { cons } from 'hexlet-pairs';
import { random, isEven } from '../mathFunctions';
import startGameEngine from '..';

const task = 'Answer "yes" if number is even. Otherwise answer "no".';

const gameData = () => {
  const randomNum = random(1, 10);
  const question = randomNum;

  const answer = isEven(question) ? 'yes' : 'no';

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
