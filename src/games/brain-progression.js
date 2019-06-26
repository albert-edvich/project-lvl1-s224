import { cons } from 'hexlet-pairs';
import { random } from '../mathLib';
import startGameEngine from '..';

const task = 'What number is missing in this progression?';

const gameData = () => {
  const base = random(1, 10);
  const step = random(1, 5);
  const term = 10;

  const emptyTerm = random(1, term);
  const emptyNum = base + ((emptyTerm - 1) * step); // an = a1 + (n-1)d

  const iter = (index, seq) => {
    if (index > term) {
      return seq;
    }
    if (index === emptyTerm) {
      return iter(index + 1, `${seq} ..`);
    }

    return iter(index + 1, `${seq} ${base + (step * (index - 1))}`);
  };

  const question = iter(1, '');

  const answer = String(emptyNum);

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
