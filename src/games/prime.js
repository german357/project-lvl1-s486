import { randomInt, game } from '..';
import { cons } from 'hexlet-pairs';

const isPrime = (number) => {
  if (!number || number === 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (!(number % i)) return false;
  }
  return true;
};

const prime = () => {
  const number = randomInt(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default game(description, prime);
