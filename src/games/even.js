import { randomInt, game } from '..';
import { cons } from 'hexlet-pairs';

const isEven = number => !(number % 2);

const even = () => {
  const question = randomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default game(description, even);
