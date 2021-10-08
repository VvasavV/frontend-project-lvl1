import { getAnswer } from './cli';
import getRandomIntInclusive from './random';

const isEven = (n) => n % 2 === 0;

export default function evenCycle(playerName) {
  const random = getRandomIntInclusive(0, 20);

  console.log(`Question: ${random}`);

  const answer = getAnswer('Your answer: ');

  console.log(`Your answer: ${answer}!`);

  if ((answer === 'yes' && isEven(random)) || (answer === 'no' && !isEven(random))) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
  console.log(`Let's try again, ${playerName}!`);

  return false;
}
