import { randomInt, game } from '..';
import { cons } from 'hexlet-pairs';

const calc = () => {
  const interval = 20;
  const num1 = randomInt(0, interval);
  const num2 = randomInt(0, interval);
  const choiceOperator = randomInt(0.5, 3);
  let correctAnswer;
  let operator = '';
  switch (choiceOperator) {
    case 1:
      correctAnswer = num1 + num2;
      operator += '+';
      break;
    case 2:
      correctAnswer = num1 - num2;
      operator += '-';
      break;
    default:
      correctAnswer = num1 * num2;
      operator += '*';
  }
  return cons(`${num1} ${operator} ${num2}`, correctAnswer);
};

const description = 'What is the result of the expression?';

export default game(description, calc);