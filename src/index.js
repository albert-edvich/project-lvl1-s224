import readlineSync from 'readline-sync';
import { car } from 'hexlet-pairs';
import gamesFlow from './gamesFlow';
import gamesList from './gamesList';

export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  console.log();

  const getGameTask =
    gameName === undefined ? 'No game has been selected.' : car(gamesList(gameName));
  console.log(getGameTask);
  console.log();

  const userName = readlineSync.question('May I have your name? ');

  const showUserName = `Hello, ${userName}!`;
  console.log(showUserName);
  console.log();

  gamesFlow(gameName, userName);
};
