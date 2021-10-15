import { getRandomIntInclusive, gcd } from '../math.js';
import gameCycle from '../game-cycle.js';

const getGcdTask = () => {
  const value1 = getRandomIntInclusive(0, 100);
  const value2 = getRandomIntInclusive(0, 100);

  return `${value1} ${value2}`;
};

const getGcdCorrectAnswer = (task) => gcd(task);

const gcdCycle = (playerName) => gameCycle(playerName, getGcdTask, getGcdCorrectAnswer);

export default gcdCycle;
