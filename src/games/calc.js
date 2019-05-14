import game from '..';
import randomInt from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

/* initial value and interval for random number generation */
const initialValue = 0;
const interval = 20;

/* expression constructor */
const constructor = (num1, num2, operatorNum) => {
  let result;
  let operator = '';
  switch (operatorNum) {
    case 1:
      result = num1 + num2;
      operator += '+';
      break;
    case 2:
      result = num1 - num2;
      operator += '-';
      break;
    default:
      result = num1 * num2;
      operator += '*';
  }
  return cons(result, operator);
};

const calc = () => {
  const num1 = randomInt(initialValue, interval);
  const num2 = randomInt(initialValue, interval);
  const operatorNum = randomInt(0.5, 3);
  const expression = constructor(num1, num2, operatorNum);
  const correctAnswer = car(expression);
  const operator = cdr(expression);
  const question = `${num1} ${operator} ${num2}`;
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

export default game(description, calc);
