import { greet } from './cli.js';

const play = (game) => {
  const playerName = greet();

  game(playerName);
};

export default play;
