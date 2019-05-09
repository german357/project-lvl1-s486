import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const request = readlineSync.question;
const randomInt = (start, interval) => Math.floor(start + Math.random() * interval);

const game = (kindOfGame) => {
  console.log(`Welcome to the Brain Games!\n${car(kindOfGame())}\n`);
  const name = request('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const launch = (count) => {
    if (!count) {
      return `Congratulations, ${name}!`;
    }
    const pair = kindOfGame();
    const message = car(cdr(pair));
    const correctAnswer = String(cdr(cdr(pair)));
    console.log(`Question: ${message}`);
    const answer = request('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      return launch(count - 1);
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  };

  return launch(3);
};

export {
  request, randomInt, game,
};
