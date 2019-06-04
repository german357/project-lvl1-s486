import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfTurns = 3;

const game = (description, kindOfGame) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const test = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return 1;
    }
    const unit = kindOfGame();
    const question = car(unit);
    const correctAnswer = cdr(unit);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      return test(count - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return 0;
  };

  return test(numberOfTurns);
};

export default game;
