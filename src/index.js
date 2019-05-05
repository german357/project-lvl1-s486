import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const request = readlineSync.question;
const randomInt = (start, interval) => Math.floor(start + Math.random() * interval);

const even = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const num = randomInt(0, 100);
  const correctAnswer = (num % 2) ? 'no' : 'yes';
  return cons(description, cons(num, correctAnswer));
};

const calc = () => {
  const description = 'What is the result of the expression?\n';
  const interval = 20;
  const num1 = randomInt(0, interval);
  const num2 = randomInt(0, interval);
  const choiceOperator = randomInt(0.5, 3);
  let correctAnswer;
  let operator = '';
  switch (choiceOperator) {
    case 1:
      correctAnswer = num1 + num2;
      operator += '+';
      break;
    case 2:
      correctAnswer = num1 - num2;
      operator += '-';
      break;
    default:
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
    const iter = (count, acc) => {
      if (count > lowerNum / 2) {
        return acc;
      }
      if (!(greaterNum % count) && !(lowerNum % count)) {
        return iter(count + 1, count);
      }
      return iter(count + 1, acc);
    };
    correctAnswer = iter(1, 1);
  }
  return cons(description, cons(`${lowerNum} ${greaterNum}`, correctAnswer));
};

const progression = () => {
  const description = 'What number is missing in the progression?\n';
  /*  The initial term of an arithmetic progression: a1
  common difference of successive members: d
  nth term of the sequence: an = a0 + (n - 1) * d */
  const a1 = randomInt(0, 20);
  const d = randomInt(0, 10);
  const amountOfElements = 10;
  const positionOfMissingItem = randomInt(1, amountOfElements - 1);
  let correctAnswer;
  const iter = (count, acc) => {
    if (count > amountOfElements) return acc;
    const an = a1 + (count - 1) * d;
    if (count === positionOfMissingItem) {
      correctAnswer = an;
      return iter(count + 1, `${acc}.. `);
    }
    return iter(count + 1, `${acc}${an} `);
  };
  return cons(description, cons(iter(1, ''), correctAnswer));
};

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
  const num = randomInt(0, 100);
  const check = (divider) => {
    if (divider > num / 2) return 'yes';
    if (!(num % divider)) return 'no';
    return check(divider + 1);
  };
  const correctAnswer = (!num || num === 1) ? 'no' : check(2);
  return cons(description, cons(num, correctAnswer));
};

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
  request, even, calc, game, gcd, progression, prime,
}; // export default неправильно проходит через babel.
