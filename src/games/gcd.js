import { cons } from 'hexlet-pairs';
import randomInt from '../utils';

/* initial value and interval for random number generation */
const initialValue = 1;
const interval = 99;

const gcdFind = (num1, num2) => {
  const lowerNum = Math.min(num1, num2);
  const greaterNum = Math.max(num1, num2);
  if (greaterNum % lowerNum === 0) return lowerNum;
  const iter = (count, acc) => {
    if (count > lowerNum / 2) return acc;
    if (!(greaterNum % count) && !(lowerNum % count)) return iter(count + 1, count);
    return iter(count + 1, acc);
  };
  return iter(1, 1);
};

const gcd = () => {
  const num1 = randomInt(initialValue, interval);
  const num2 = randomInt(initialValue, interval);
  const correctAnswer = gcdFind(num1, num2);
  const question = `${num1} ${num2}`;
  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

export { description, gcd };
