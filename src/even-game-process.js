import evenCycle from './even-cycle';

export default function evenGameProcess(playerName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    if (evenCycle(playerName)) {
      console.log('Correct!');
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}
