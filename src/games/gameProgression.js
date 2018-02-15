import { cons } from 'hexlet-pairs';
import { random } from '../mathFunctions';
import startGameEngine from '..';

const task = 'What number is missing in this progression?';

const gameData = () => {
  const base = random(1, 10);
  const step = random(1, 5);
  const term = 10;

  const emptyTerm = random(1, term);
  const emptyNum = ((emptyTerm - 1) * step) + base;

  const makeSequence = (a1, d, n) => {
    const iter = (seq, nextNum, counter) => {
      if (counter <= 0) {
        return seq;
      }

      if (nextNum === emptyNum) {
        return iter(`${seq} ..`, nextNum + d, counter - 1);
      }

      return iter(`${seq} ${nextNum}`, nextNum + d, counter - 1);
    };

    return iter('', a1, n);
  };

  const question = makeSequence(base, step, term);

  const answer = String(emptyNum);

  const gamePair = cons(question, answer);

  return gamePair;
};

export default () => {
  startGameEngine(task, gameData);
};
