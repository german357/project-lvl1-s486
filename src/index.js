import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const request = readlineSync.question;
const numberOfTurns = 3;

const game = (kindOfGame) => {
  const description = car(kindOfGame);
  const gameGen = cdr(kindOfGame);
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const name = request('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const launch = (count) => {
    if (!count) {
      return console.log(`Congratulations, ${name}!`);
    }
    const unit = gameGen();
    const message = car(unit);
    const correctAnswer = String(cdr(unit));
    console.log(`Question: ${message}`);
    const answer = request('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      return launch(count - 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  };
  return launch(numberOfTurns);
};

export default game;
