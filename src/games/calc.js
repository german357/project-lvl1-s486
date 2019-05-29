import { cons, car, cdr } from 'hexlet-pairs';
import randomInt from '../utils';

/* initial value and interval for random number generation */
const initialValue = 0;
const interval = 20;

/* expression constructor */
const constructor = (num1, num2, operatorNum) => {
  let result;
  let expression = '';
  switch (operatorNum) {
    case 1:
      result = num1 + num2;
      expression += `${num1} + ${num2}`;
      break;
    case 2:
      result = num1 - num2;
      expression += `${num1} - ${num2}`;
      break;
    default:
      result = num1 * num2;
      expression += `${num1} * ${num2}`;
  }
  return cons(result, expression);
};

const calc = () => {
  const num1 = randomInt(initialValue, interval);
  const num2 = randomInt(initialValue, interval);
  const operatorNum = randomInt(0.5, 3);
  const expression = constructor(num1, num2, operatorNum);
  const correctAnswer = car(expression);
  const question = cdr(expression);
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

export { description, calc };
