import { cons } from 'hexlet-pairs';
import randomInt from '../utils';
import game from '..';

/* initial value and interval for generating initial term of arithmetic progression */
const initialValue1 = 0;
const interval1 = 20;

/* initial value and interval for generating difference of arithmetic progression */
const initialValue2 = 0;
const interval2 = 10;

/* the amount of elements of arithmetic progression */
const amountOfElements = 10;

/* progression constructor */
const constructor = (a1, d, positionOfMissingItem) => {
  const iter = (count, acc) => {
    if (count > amountOfElements) return acc;
    const an = a1 + (count - 1) * d;
    if (count === positionOfMissingItem) return iter(count + 1, `${acc}.. `);
    return iter(count + 1, `${acc}${an} `);
  };
  return iter(1, '').trim();
};

const progression = () => {
  const a1 = randomInt(initialValue1, interval1);
  const d = randomInt(initialValue2, interval2);
  const positionOfMissingItem = randomInt(1, amountOfElements - 1);
  const correctAnswer = String(a1 + (positionOfMissingItem - 1) * d);
  const question = constructor(a1, d, positionOfMissingItem);
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?';

export default () => game(description, progression);
