import { getRandomIntInclusive, getRandomInt, calculate } from '../math.js';
import gameCycle from '../game-cycle.js';

const indexToOperation = (index) => {
  switch (index) {
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const getCalcTask = () => {
  const value1 = getRandomIntInclusive(0, 20);
  const value2 = getRandomIntInclusive(0, 20);

  const operation = getRandomInt(0, 3);

  return `${value1} ${indexToOperation(operation)} ${value2}`;
};

const getCalcCorrectAnswer = (task) => calculate(task);

const calcCycle = (playerName) => gameCycle(playerName, getCalcTask, getCalcCorrectAnswer);

export default calcCycle;
