import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfTurns = 3;

const game = (description, kindOfGame) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numberOfTurns; i += 1) {
    const unit = kindOfGame();
    const question = car(unit);
    const correctAnswer = cdr(unit);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
