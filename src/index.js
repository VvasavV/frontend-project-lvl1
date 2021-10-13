import { greet } from "../src/cli.js";

const play = (game) => {
  const playerName = greet();

  game(playerName);
};

export default play;
