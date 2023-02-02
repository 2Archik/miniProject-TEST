const CurrentYear = 2023;
const CorrectAnswer = "Ответ правильный";
const ErrorAnswer = "Ответ неправильный";

const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");
const outputNode = document.querySelector(".js-output");

buttonNode.addEventListener("click", function () {
  const inputValue = inputNode.value;
  if (!inputValue) {
    return;
  }
  const answer = Number(inputNode.value);
  let output = CorrectAnswer;
  if (answer !== CurrentYear) {
    output = ErrorAnswer;
  }
  outputNode.innerHTML = output;
});
