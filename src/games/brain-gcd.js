#!/usr/bin/node

import { game, randomInt } from '..';
import { cons } from 'hexlet-pairs';

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

console.log(game(gcd));
