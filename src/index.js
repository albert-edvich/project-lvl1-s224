import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export default (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const showTask = task === undefined ? '' : task;
  console.log(showTask);
  console.log();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  if (task === undefined) {
    return '';
  }

  const game = (round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const getGameData = gameData();

    const question = car(getGameData);
    console.log(`Question: ${question}`);

    const correctAnswer = cdr(getGameData);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return game(round + 1);
    }

    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);

    return console.log(`Let's try again, ${userName}!`);
  };

  return game(0);
};
