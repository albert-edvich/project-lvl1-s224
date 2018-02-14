import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import gamesList from './gamesList';


export default (gameName, userName) => {
  if (gameName === undefined) {
    return '';
  }

  const game = (round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const getGameData = gamesList(gameName);

    const getGameQuestion = car(cdr(getGameData));
    const question = getGameQuestion;
    console.log(`Question: ${question}`);

    const getGameCorrectAnswer = cdr(cdr(getGameData));
    const correctAnswer = getGameCorrectAnswer;

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
