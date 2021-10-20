import game from '../game.js';
import progressionCycle from '../cycles/progression-cycle.js';

const progressionGame = (playerName) => game(playerName, 'What number is missing in the progression?', progressionCycle);

export default progressionGame;
