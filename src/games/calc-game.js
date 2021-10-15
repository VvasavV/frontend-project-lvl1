import game from "../game.js";
import calcCycle from "../cycles/calc-cycle.js";

const calcGame = (playerName) =>
  game(playerName, "What is the result of the expression?", calcCycle);

export default calcGame;
