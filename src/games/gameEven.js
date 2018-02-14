import { cons } from 'hexlet-pairs';
import random from '../random';

export default () => {
  const gameTask = 'Answer "yes" if number is even. Otherwise answer "no".';

  const randomNum = random();
  const gameQuestion = randomNum;

  const isEven = n => n % 2 === 0;

  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  const gameData = cons(gameTask, cons(gameQuestion, correctAnswer));

  return gameData;
};
