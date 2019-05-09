import { randomInt } from '..';
import { cons } from 'hexlet-pairs';

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

export default progression;
