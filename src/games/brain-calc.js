import { cons } from 'hexlet-pairs';
import { random } from '../mathLib';
import startGameEngine from '..';

const task = 'What is the result of the expression?';

const gameData = () => {
  const randomNum1 = random(1, 10);
  const randomNum2 = random(1, 10);

  const randomOperand = random(1, 3);
  const operand = () => {
    switch (true) {
      case randomOperand === 1:
        return '+';
      case randomOperand === 2:
        return '-';
      default:
        return '*';
    }
  };

  const question = `${randomNum1} ${operand()} ${randomNum2}`;

  const getAnswer = () => {
    if (randomOperand === 1) {
      return randomNum1 + randomNum2;
    }
    if (randomOperand === 2) {
      return randomNum1 - randomNum2;
    }
    return randomNum1 * randomNum2;
  };

  const answer = String(getAnswer());

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
