import readlineSync from 'readline-sync';

const request = readlineSync.question;
const pi = 3.14;

export { request, pi }; /* export default неправильно проходит через babel.
Также не проходит ф-я с 2-мя аргументами */
