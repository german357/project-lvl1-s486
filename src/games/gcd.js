import { randomInt, game } from '..';
import { cons } from 'hexlet-pairs';

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
  const greaterNum = randomInt(1, 99);
  const lowerNum = randomInt(1, greaterNum);
  const correctAnswer = gcdFind(greaterNum, lowerNum);
  return cons(`${lowerNum} ${greaterNum}`, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default game(description, gcd);
