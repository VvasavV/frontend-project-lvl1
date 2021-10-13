import { isEven, getRandomIntInclusive } from "../math.js";
import { gameCycle } from "../game-cycle.js";

const getEvenTask = () => getRandomIntInclusive(0, 20);

const getEvenCorrectAnswer = (task) => (isEven(task) ? "yes" : "no");

const evenCycle = (playerName) =>
  gameCycle(playerName, getEvenTask, getEvenCorrectAnswer);

export default evenCycle;
