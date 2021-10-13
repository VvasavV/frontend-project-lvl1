import readlineSync from "readline-sync";

export function getAnswer(question) {
  return readlineSync.question(question);
}

export function greet() {
  console.log("Welcome to the Brain Games!");

  const name = getAnswer("May I have your name? ");

  console.log(`Hello, ${name}!`);

  return name;
}
