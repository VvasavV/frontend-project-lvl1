import { getRandomIntInclusive } from '../math.js';
import gameCycle from '../game-cycle.js';

const getProgrTask = () => {
  const startValue = getRandomIntInclusive(0, 20);
  const step = getRandomIntInclusive(0, 10);

  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(startValue + i * step);
  }

  const indexOfMissedValue = getRandomIntInclusive(1, 10);

  progression[indexOfMissedValue] = '..';

  return progression.join(' ');
};

const getProgrCorrectAnswer = (task) => {
  const progression = task.split(' ');

  const index = progression.indexOf('..');

  const progressionLength = progression.length;

  if (index === 0) {
    return 2 * Number(progression[1]) - Number(progression[2]);
  }

  if (index === progressionLength) {
    return 2 * Number(progression[progressionLength - 2])
             - Number(progression[progressionLength - 3]);
  }

  const delta = (Number(progression[progressionLength - 1]) - Number(progression[0]))
                / (progressionLength - 1);

  return Number(progression[index - 1]) + delta;
};

const progressionCycle = (playerName) => gameCycle(playerName, getProgrTask, getProgrCorrectAnswer);

export default progressionCycle;
