import { cons } from 'hexlet-pairs';
import { random, isEven, answerYesNo } from '../mathLib';
import startGameEngine from '..';

const task = 'Answer "yes" if number is even. Otherwise answer "no".';

const gameData = () => {
  const randomNum = random(1, 10);
  const question = randomNum;

  const answer = answerYesNo(isEven(question));

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
