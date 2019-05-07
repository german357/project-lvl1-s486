#!/usr/bin/node

import { game, randomInt } from '..';
import { cons } from 'hexlet-pairs';

const even = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const num = randomInt(0, 100);
  const correctAnswer = (num % 2) ? 'no' : 'yes';
  return cons(description, cons(num, correctAnswer));
};

console.log(game(even));
