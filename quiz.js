const quizApp = document.querySelector(".myQuizApp");
const startQuizButton = document.querySelector(".btn");
const ruleBox = document.querySelector(".ruleBox");
const exitButton = document.querySelector("#btn1");
const continueButton = document.querySelector("#btn2");
const questionPart = document.querySelector(".questionPart");

// Start Quiz Button - Show Rules Box
startQuizButton.addEventListener("click", () => {
  quizApp.style.display = "none";
  ruleBox.classList.add("activeInfo");
});

// Exit Button - Hide Rules Box
exitButton.addEventListener("click", () => {
  ruleBox.classList.remove("activeInfo");
  document.querySelector(".myQuizApp").style.display = "block";
});

// Continue Button - Show question

continueButton.addEventListener("click", () => {
  ruleBox.classList.remove("activeInfo");
  questionPart.classList.add("activeQuestion");
  showQuestions(0);
});
const nextButton = document.querySelector("#nextBtn");
let questionCount = 0;
nextButton.addEventListener("click", () => {
  if (questionCount < myQuestions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
  } else {
    alert("You have completed your task");
  }
});

// showing all question

function showQuestions(index) {
  const questionTitle = document.querySelector(".quesTitle");

  // const questionOptions =
  let questionTag =
    "<h2>" +
    myQuestions[index].numb +
    ". " +
    myQuestions[index].question +
    "</h2>";
  questionTitle.innerHTML = questionTag;

  const myOptions = document.querySelector(".myOptions");
  let optionTag =
    '<div class="option">' +
    myQuestions[index].options[0] +
    "</div>" +
    '<div class="option">' +
    myQuestions[index].options[1] +
    "</div>" +
    '<div class="option">' +
    myQuestions[index].options[2] +
    "</div>" +
    '<div class="option">' +
    myQuestions[index].options[3] +
    "</div>";
  myOptions.innerHTML = optionTag;

  const totalQun = document.querySelector(".totalQuestion");
  let totalQunTag = "<p>" + myQuestions[index].numb + " of 5" + "</p>";
  totalQun.innerHTML = totalQunTag;
}
