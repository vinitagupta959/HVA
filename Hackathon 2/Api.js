const startPage = document.getElementById("startPage");
const startButton = document.getElementById("startButton");
const questionPage = document.getElementById("questionPage");
const reStart = document.getElementById("restart");
let player1 = document.getElementById("player1").value;
let player2 = document.getElementById("player2").value;
let category = document.getElementById("category").value;
let currentQuestion = 0;
let player1Score = 0;
let player2Score = 0;
let playerTurn = 1;

// array for categories
let categories = [
  "sport_and_leisure",
  "science_and_nature",
  "arts_and_literature",
  "science",
  "geography",
  "food_and_drink",
  "general_knowledge",
  "history",
  "music",
];
// when start button click 
startButton.addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  category = document.getElementById("category").value;
  if (player1 === "" || player2 === "" || category === "") {
    alert("Player 1, Player 2 names and category are required.");
  } else {
    // console.log("categories", category);
    startPage.style.display = "none";
    questionPage.style.display = "block";
    removeCategory(category);
    question(category, player1, player2);
  }
});


let finalQuestions = [];
const loadingMessage = document.getElementById("loading");
const errorMessage = document.getElementById("error");
// fetch question by api
async function question(category, player1, player2) {
  console.log(category);
  loadingMessage.style.display = "block";
  questionPage.style.display = "none";
  try {
    const response = await fetch(
      `https://the-trivia-api.com/v2/questions/?limit=50&difficulties=easy,medium,hard&categories=${category}`
    );
    const data = await response.json();
    const easyQuestions = data.filter(
      (question) => question.difficulty === "easy"
    );
    const mediumQuestions = data.filter(
      (question) => question.difficulty === "medium"
    );
    const hardQuestions = data.filter(
      (question) => question.difficulty === "hard"
    );
    // console.log(easyQuestions, mediumQuestions, hardQuestions);
    finalQuestions.push(
      easyQuestions[0],
      easyQuestions[1],
      mediumQuestions[0],
      mediumQuestions[1],
      hardQuestions[0],
      hardQuestions[1]
    );
    console.log(finalQuestions);
    setTimeout(() => {
      loadingMessage.style.display = "none";
      showQuestion(finalQuestions, player1, player2);
    }, 1000);
  } catch (error) {
    console.log(error);
    errorMessage.innerText = "Something went wrong";
  }
}

// Show question
const questionText = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const playerTurntext = document.getElementById("playerturn");
const nextQuestion = document.getElementById("nextQuestion");
let rightAnswer = document.getElementById("Answer");
function showQuestion(finalQuestions) {
  questionPage.style.display = "block";
  nextQuestion.style.display = "none";
  const allOptions = finalQuestions[currentQuestion].incorrectAnswers.concat(finalQuestions[currentQuestion].correctAnswer);
  allOptions.sort(() => Math.random() - 0.5);
  questionText.innerText = `Q.${finalQuestions[currentQuestion].question.text}`;
  option1.innerText = `A. ${allOptions[0]}`;
  option2.innerText = `B. ${allOptions[1]}`;
  option3.innerText = `C. ${allOptions[2]}`;
  option4.innerText = `D. ${allOptions[3]}`;

  playerTurntext.innerText = `It's ${
    playerTurn === 1 ? player1 : player2
  }'s turn!`;

  // selected  option
  option1.onclick = function () { 
    checkAnswer(option1.innerText);
  };
  option2.onclick = function () { 
    checkAnswer(option2.innerText);
  };
  option3.onclick = function () { 
    checkAnswer(option3.innerText);
  };
  option4.onclick = function () { 
    checkAnswer(option4.innerText);
  };
}

// check answer function
function checkAnswer(selectAnswer) {
  if (selectAnswer === finalQuestions[currentQuestion].correctAnswer) {
    rightAnswer.innerText = `Correct Answer`; 
    nextQuestion.style.display = "block";
    if (playerTurn === 1) {
      player1Score += getDificulty(finalQuestions[currentQuestion].difficulty);
    } else {
      player2Score += getDificulty(finalQuestions[currentQuestion].difficulty);
    } 

  } else {
    rightAnswer.innerText = `Incorrect ! ${finalQuestions[currentQuestion].correctAnswer} is the correct answer.`;
  }
  nextQuestion.style.display = "block";
}

function getDificulty(difficulty) {
  if (difficulty === "easy") {
    return 10;
  } else if (difficulty === "medium") {
    return 15;
  } else {
    return 20;
  }
}

// next question
nextQuestion.addEventListener("click", () => {
  rightAnswer.innerText = "";
  currentQuestion++;
  if (playerTurn == 1) {
    playerTurn = 2;
  } else {
    playerTurn = 1;
  }
  if (currentQuestion < finalQuestions.length) {
    showQuestion(finalQuestions);
  } else {

    showResult();
  }
});

// showresult
const resultPage = document.getElementById("resultPage");
const winnerMessage = document.getElementById("message");
const scoreMessage = document.getElementById("score");
const categoryInfo = document.getElementById("categoryInfo");
function showResult() {
  questionPage.style.display = "none";
  resultPage.style.display = "block";
  if (player1Score > player2Score) {
    winnerMessage.innerText = `Congratulations🥳🥳! ${player1} is the winner.`;
  } else if (player1Score < player2Score) {
    winnerMessage.innerText = `Congratulations🥳🥳! ${player2} is the winner.`;
  } else {
    if (player1Score == 0 && player2Score == 0) {
      winnerMessage.innerText = "No one winner";
    } else {
      winnerMessage.innerText = `It's a tie🥳🥳!`;
    }
  }
  scoreMessage.innerText = `${player1} score is ${player1Score} and ${player2} score is ${player2Score}`;
  removeCategory(category);
  if (categories.length == 0) {
    categoryInfo.innerText = "we dont have category.";
    reStart.style.display = "none";
  } else {
    categoryInfo.innerText = "You can play again with remaining categories!";
    reStart.style.display = "block";
  
  }
}
// restart game without previos category
reStart.addEventListener("click", () => {
  currentQuestion = 0;
  playerTurn = 1;
  player1Score = 0;
  player2Score = 0;
  finalQuestions = [];
  startPage.style.display = "block";
  resultPage.style.display = "none";
  questionPage.style.display = "none";
});

// remove category
function removeCategory(category) {
  console.log("recent:", categories);
  categories = categories.filter((cate) => cate !== category);
  console.log("now:", categories); 
  const categoryDropdown = document.getElementById("category");
  const options = Array.from(categoryDropdown.options); 
  options.forEach((option, index) => {
    if (option.value === category) {
      categoryDropdown.remove(index);  
      console.log(`Removed ${category}`);
    }
  });
  return categories

}
