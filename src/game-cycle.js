import { getAnswer } from "./cli.js";

export function gameCycle(playerName, getTask, getCorrectAnswer) {
  const task = getTask();

  console.log(`Question: ${task}`);

  const answer = getAnswer("Your answer: ");

  console.log(`Your answer: ${answer}!`);

  const correctAnswer = getCorrectAnswer(task);

  if (answer === correctAnswer) {
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  console.log(`Let's try again, ${playerName}!`);

  return false;
}
