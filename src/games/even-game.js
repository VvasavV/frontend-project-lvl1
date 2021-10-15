import game from '../game.js';
import evenCycle from '../cycles/even-cycle.js';

const evenGame = (playerName) => game(
  playerName,
  'Answer "yes" if the number is even, otherwise answer "no".',
  evenCycle,
);

export default evenGame;
