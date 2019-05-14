import game from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

/* initial value and interval for random number generation */
const initialValue = 0;
const interval = 100;

const isEven = number => !(number % 2);

const even = () => {
  const question = randomInt(initialValue, interval);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default game(description, even);
