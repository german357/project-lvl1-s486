import { cons } from 'hexlet-pairs';
import randomInt from '../utils';
import game from '..';

/* initial value and interval for random number generation */
const initialValue = 1;
const interval = 99;

const gcdFind = (num1, num2) => {
  if (num1 === 0 || num2 === 0) return 0;
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gcd = () => {
  const num1 = randomInt(initialValue, interval);
  const num2 = randomInt(initialValue, interval);
  const correctAnswer = String(gcdFind(num1, num2));
  const question = `${num1} ${num2}`;
  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

const launchGame = () => game(description, gcd);

export default launchGame;
