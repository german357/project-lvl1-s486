#!/usr/bin/node

import { askName } from '..';
console.log("Welcome to the Brain Games!\n");
const name = askName('May I have your name? ');
console.log(`Hello, ${name}!`);
