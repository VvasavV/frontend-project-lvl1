const game = (playerName, description, gameCycle) => {
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    if (gameCycle(playerName)) {
      console.log("Correct!");
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default game;
