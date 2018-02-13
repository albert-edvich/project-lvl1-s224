import readlineSync from 'readline-sync';

export default (userName) => {
  const isEven = n => (n % 2 === 0);
  const numOfRounds = 3;

  const iter = (acc) => {
    if (acc <= 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNum = Math.ceil(Math.random() * 10);

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Answer: ');

    const correct = 'Correct!';
    const incorrectOdd = `${answer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`;
    const incorrectEven = `${answer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`;

    if (answer === 'yes' && isEven(randomNum)) {
      console.log(correct);
      return iter(acc - 1);
    } else if (answer === 'no' && !isEven(randomNum)) {
      console.log(correct);
      return iter(acc - 1);
    } else if (answer !== 'yes' && isEven(randomNum)) {
      return console.log(incorrectEven);
    } else if (answer !== 'no' && !isEven(randomNum)) {
      return console.log(incorrectOdd);
    }
    return null;
  };
  return iter(numOfRounds);
};
