#!/usr/bin/node

import { request } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const name = request('May I have your name? ');
console.log(`Hello, ${name}!\n`);

const f = (count) => {
  if (count === 0) {
    return `Congratulations, ${name}!`;
  }
  const randomInt = Math.floor(Math.random() * 100);
  const correctAnswer = (randomInt % 2) ? 'no' : 'yes';
  console.log(`Question: ${randomInt}`);
  const answer = request('Your answer: ');
  if (correctAnswer === answer) {
    console.log('Correct!');
    return f(count - 1);
  }
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};

console.log(f(3));
