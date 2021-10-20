import { getRandomIntInclusive, isPrime } from '../math.js';
import gameCycle from '../game-cycle.js';

const getPrimeTask = () => getRandomIntInclusive(2, 20);

const getPrimeCorrectAnswer = (task) => (isPrime(task) ? 'yes' : 'no');

const primeCycle = (playerName) => gameCycle(playerName, getPrimeTask, getPrimeCorrectAnswer);

export default primeCycle;
