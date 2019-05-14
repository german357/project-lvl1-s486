import game from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

/* initial value and interval for random number generation */
const initialValue = 0;
const interval = 100;

const isPrime = (number) => {
  if (!number || number === 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (!(number % i)) return false;
  }
  return true;
};

const prime = () => {
  const question = randomInt(initialValue, interval);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default game(description, prime);
