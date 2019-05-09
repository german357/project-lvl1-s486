import { randomInt } from '..';
import { cons } from 'hexlet-pairs';

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

export default prime;
