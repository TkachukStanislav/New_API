document.getElementById("get-riddle-btn").addEventListener("click", getRiddle);
document
  .getElementById("show-answer-btn")
  .addEventListener("click", showAnswer);

let currentAnswer = ""; // Для зберігання відповіді на загадку

function getRiddle() {
  const riddleBox = document.getElementById("riddle-box");
  const riddleElement = document.getElementById("riddle");
  const answerBox = document.getElementById("answer-box");
  const answerElement = document.getElementById("answer");
  const showAnswerBtn = document.getElementById("show-answer-btn");

  // Скидаємо попередні значення
  riddleElement.textContent = "Loading...";
  answerBox.style.display = "none";
  showAnswerBtn.style.display = "none";
  currentAnswer = "";

  // Виклик API для отримання загадки
  fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then((response) => response.json())
    .then((data) => {
      // Виведення загадки
      riddleElement.textContent = data.setup;
      currentAnswer = data.delivery;

      // Показуємо кнопку для відображення відповіді
      showAnswerBtn.style.display = "inline-block";
    })
    .catch((error) => {
      riddleElement.textContent = "Oops! Something went wrong. Try again!";
      console.error("Error fetching the riddle:", error);
    });
}

function showAnswer() {
  const answerBox = document.getElementById("answer-box");
  const answerElement = document.getElementById("answer");

  // Виведення відповіді
  answerElement.textContent = currentAnswer;
  answerBox.style.display = "block";
}
