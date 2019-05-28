import game from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

/* initial value and interval for random number generation */
const initialValue = 1;
const interval = 99;

const gcdFind = (greaterNum, lowerNum) => {
  if (!(greaterNum % lowerNum)) return lowerNum;
  const iter = (count, acc) => {
    if (count > lowerNum / 2) return acc;
    if (!(greaterNum % count) && !(lowerNum % count)) return iter(count + 1, count);
    return iter(count + 1, acc);
  };
  return iter(1, 1);
};

const gcd = () => {
  const greaterNum = randomInt(initialValue, interval);
  const lowerNum = randomInt(initialValue, greaterNum);
  const correctAnswer = gcdFind(greaterNum, lowerNum);
  const question = `${lowerNum} ${greaterNum}`;
  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default cons(description, gcd);
