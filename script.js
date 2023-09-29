const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector(".options-container");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;
let playing = true;

const questions = [
  {
    question: "1. Who is the current president of Nigeria?",
    options: ["Bola Ahmed Tinubu", "Peter Obi", "Atiku Abubakar", "Mr Emma"],
    answer: "Bola Ahmed Tinubu",
  },
  {
    question: "2. How many ethic groups do we have in Nigeria?",
    options: ["3", "45", "100", "250"],
    answer: "250",
  },
  {
    question: "3. In Nigeria, democracy day is now celebrated on?",
    options: ["May 15", "June 12", "Dec 25", "Oct 1"],
    answer: "June 12",
  },
  {
    question: "4. How was Sir Dele Diwa killed?",
    options: ["Sapa", "Through letter bomb", "In a Coup", "Thunder"],
    answer: "Through letter bomb",
  },
  {
    question: "5. When was paper currency introduced in Nigeria?",
    options: ["1980", "1902", "1918", "2000"],
    answer: "1918",
  },
];

function displayQuestion() {
  if (playing) {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(optionButton);
    });

    feedback.textContent = "";
    nextButton.style.display = "none";
  }
}

console.log();

function checkAnswer(selectedOption) {
  if (playing) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      playing = false;
      feedback.textContent = "Correct!";
      const optionButton = document.querySelectorAll("button");
      optionButton.forEach((btn) => {
        if (btn.textContent == currentQuestion.answer)
          btn.classList.add("correct");
      });
      score++;
    } else {
      playing = false;
      feedback.textContent =
        "Wrong! The correct answer is: " + currentQuestion.answer;
      const optionButton = document.querySelectorAll("button");
      optionButton.forEach((btn) => {
        if (btn.textContent == currentQuestion.answer)
          btn.classList.add("correct");
      });
    }
    nextButton.style.display = "block";
  }
}
console.log();

function nextQuestion() {
  playing = true;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Display the final score when all questions are answered
    document.querySelector("h1").textContent = "";
    questionText.textContent = "Quiz completed!";
    optionsContainer.innerHTML = "";
    feedback.textContent =
      "Your score: " + score + " out of " + questions.length;
    nextButton.style.display = "none";
  }
}

nextButton.addEventListener("click", nextQuestion);

// Initial question display
displayQuestion();
