import { getRandomIntInclusive, gcd } from '../math.js';
import gameCycle from '../game-cycle.js';

const getGcdTask = () => {
  const value1 = getRandomIntInclusive(0, 50);
  const value2 = getRandomIntInclusive(0, 50);

  return `${value1} ${value2}`;
};

const getGcdCorrectAnswer = (task) => {
  const values = task.split(' ');

  return gcd(Number(values[0]), Number(values[1]));
};

const gcdCycle = (playerName) => gameCycle(playerName, getGcdTask, getGcdCorrectAnswer);

export default gcdCycle;
