import { cons } from 'hexlet-pairs';
import { random } from '../mathFunctions';
import startGameEngine from '..';

const task = 'What is the result of the expression?';

const gameData = () => {
  const randomNum1 = random(1, 10);
  const randomNum2 = random(1, 10);

  const randomOperand = random(1, 3);
  const operand = () => {
    if (randomOperand === 1) {
      return '+';
    } else if (randomOperand === 2) {
      return '-';
    }
    return '*';
  };

  const question = `${randomNum1} ${operand()} ${randomNum2}`;

  const getAnswer = () => {
    if (randomOperand === 1) {
      return randomNum1 + randomNum2;
    } else if (randomOperand === 2) {
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
