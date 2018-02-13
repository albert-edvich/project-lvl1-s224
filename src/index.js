import readlineSync from 'readline-sync';

export default () => {
  console.log('Answer "yes" if number is even. Otherwise answer "no".');
  console.log();

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log();
  return userName;
};
