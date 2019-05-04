import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const request = readlineSync.question;
const range = 10;
const randomInt = () => Math.floor(Math.random() * range);

const even = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const num = randomInt();
  const correctAnswer = (num % 2) ? 'no' : 'yes';
  return cons(description, cons(num, correctAnswer));
};

const calc = () => {
  const description = 'What is the result of the expression?\n';
  const num1 = randomInt();
  const num2 = randomInt();
  const num3 = randomInt();
  let correctAnswer;
  let operator = '';
  if (num3 < range / 3) {
    correctAnswer = String(num1 + num2);
    operator += '+';
  } else if (num3 < range * 2 / 3) {
    correctAnswer = String(num1 - num2);
    operator += '-';
  } else {
    correctAnswer = String(num1 * num2);
    operator += '*';
  }
  return cons(description, cons(`${num1} ${operator} ${num2}`, correctAnswer));
};

const game = (kindOfGame) => {
  console.log(`Welcome to the Brain Games!\n${car(kindOfGame())}\n`);
  const name = request('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const f = (count) => {
    if (!count) {
      return `Congratulations, ${name}!`;
    }
    const pair = kindOfGame();
    const message = car(cdr(pair));
    const correctAnswer = cdr(cdr(pair));
    console.log(`Question: ${message}`);
    const answer = request('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      return f(count - 1);
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  };

  return f(3);
};

export {
  request, even, calc, game,
}; // export default неправильно проходит через babel.
