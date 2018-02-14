import { cons } from 'hexlet-pairs';

export default () => {
  const gameTask = 'What is the result of the expression?';

  const randomNum1 = Math.floor(Math.random() * (100 - 1)) + 1;
  const randomNum2 = Math.floor(Math.random() * (100 - 1)) + 1;

  const randomOperand = Math.floor(Math.random() * (3 - 1)) + 1;
  const operand = () => {
    if (randomOperand === 1) {
      return '+';
    } else if (randomOperand === 2) {
      return '-';
    }
    return '/';
  };

  const gameQuestion =
    `${randomNum1} ${operand()} ${randomNum2}`;

  const answer = () => {
    if (randomOperand === 1) {
      return randomNum1 + randomNum2;
    } else if (randomOperand === 2) {
      return randomNum1 - randomNum2;
    }
    return randomNum1 * randomNum2;
  };

  const correctAnswer = String(answer());

  const gameData = cons(gameTask, cons(gameQuestion, correctAnswer));

  return gameData;
};
