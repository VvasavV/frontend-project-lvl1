import game from '../game.js';
import gcdCycle from '../cycles/gcd-cycle.js';

const gcdGame = (playerName) => game(playerName, 'Find the greatest common divisor of given numbers.', gcdCycle);

export default gcdGame;
