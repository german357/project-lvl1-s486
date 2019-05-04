import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const request = readlineSync.question;
const randomInt = (start, range) => Math.floor(start + Math.random() * range);

const even = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const num = randomInt(0, 100);
  const correctAnswer = (num % 2) ? 'no' : 'yes';
  return cons(description, cons(num, correctAnswer));
};

const calc = () => {
  const description = 'What is the result of the expression?\n';
  const range = 10;
  const num1 = randomInt(0, range);
  const num2 = randomInt(0, range);
  const num3 = randomInt(0, range);
  let correctAnswer;
  let operator = '';
  if (num3 < range / 3) {
    correctAnswer = num1 + num2;
    operator += '+';
  } else if (num3 < range * 2 / 3) {
    correctAnswer = num1 - num2;
    operator += '-';
  } else {
    correctAnswer = num1 * num2;
    operator += '*';
  }
  return cons(description, cons(`${num1} ${operator} ${num2}`, correctAnswer));
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.\n';
  const greaterNum = randomInt(1, 99);
  const lowerNum = randomInt(1, greaterNum);
  let correctAnswer;
  if (!(greaterNum % lowerNum)) {
    correctAnswer = lowerNum;
  } else {
    const iter = (n, S) => {
      if (n >= lowerNum / 2) {
        return S;
      }
      if (!(greaterNum % n) && !(lowerNum % n)) {
        return iter(n + 1, n);
      }
      return iter(n + 1, S);
    };
    correctAnswer = iter(1, 1);
  }
  return cons(description, cons(`${lowerNum} ${greaterNum}`, correctAnswer));
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
    const correctAnswer = String(cdr(cdr(pair)));
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
  request, even, calc, game, gcd,
}; // export default неправильно проходит через babel.
