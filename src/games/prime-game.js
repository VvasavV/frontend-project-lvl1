import game from '../game.js';
import primeCycle from '../cycles/prime-cycle.js';

const primeGame = (playerName) => game(playerName, 'Answer "yes" if given number is prime. Otherwise answer "no".', primeCycle);

export default primeGame;
