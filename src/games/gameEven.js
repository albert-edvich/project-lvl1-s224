import { cons } from 'hexlet-pairs';

export default () => {
  const gameTask = 'Answer "yes" if number is even. Otherwise answer "no".';

  const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const gameQuestion = randomNum(1, 100);

  const isEven = n => n % 2 === 0;

  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  const gameData = cons(gameTask, cons(gameQuestion, correctAnswer));

  return gameData;
};
