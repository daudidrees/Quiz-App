const quiz1 = {
  quiz: 'Q: Which five colours make up the Olympic rings?',
  answer: "ans1",
  option1: "Q1:1",
  option2: "Q1:2",
  option3: "Q1:3",
  option4: "Q1:4",
};

const quiz2 = {
  quiz: 'Q: Who painted the Mona Lisa?',
  answer: "ans2",
  option1: "Q2:1",
  option2: "Q2:2",
  option3: "Q2:3",
  option4: "Q2:4",
};

const quiz3 = {
  quiz: 'Q: Which planet is closest to the sun?',
  answer: "ans3",
  option1: "Q3:1",
  option2: "Q3:2",
  option3: "Q3:3",
  option4: "Q3:4",
};

const quiz4 = {
  quiz: 'Q: How many valves does the heart have?',
  answer: "ans4",
  option1: "Q4:1",
  option2: "Q4:2",
  option3: "Q4:3",
  option4: "Q4:4",
};

const quiz5 = {
  quiz: 'Q: What\'s a baby rabbit called?',
  answer: "ans4",
  option1: "Q5:1",
  option2: "Q5:2",
  option3: "Q5:3",
  option4: "Q5:4",
};

const quiz = [quiz1, quiz2, quiz3, quiz4, quiz5];


//Selector
const quizInput = document.querySelector('.quizInput');
const submitBtn = document.querySelector('.submit');
const answers = document.querySelectorAll('.userAnswer');
const scoreBoard = document.querySelector('.scoreBoard');
const loaderSpinner = document.querySelector('.loaderSpinner');
const contentArea = document.querySelector('.contentArea');
const quizEndModal = document.querySelector('.quizEndModal');
const wrongAnswer = document.querySelector('.wrongAnswer')
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
let answer;
let score = 0;
let randomElement = 0;

//Random Question Functions
const randomEl = function () {
  quizInput.textContent = quiz[randomElement].quiz;
  option1.innerHTML = quiz[randomElement].option1;
  option2.innerHTML = quiz[randomElement].option2;
  option3.innerHTML = quiz[randomElement].option3;
  option4.innerHTML = quiz[randomElement].option4;
};

//Event Handlers
submitBtn.addEventListener('click', () => {

  //Checking if current question is less than curren array
  if (randomElement >= quiz.length) {
    contentArea.classList.add('hidden');
    quizEndModal.classList.remove('hidden');
  };

  //Getting User Answer
  answers.forEach(el => {
    if (el.checked) {
      answer = el.getAttribute('id');
      contentArea.classList.add('contenthidden');
      loaderSpinner.classList.add('showHidden');
      setTimeout(() => {
        loaderSpinner.classList.remove('showHidden');
        contentArea.classList.remove('contenthidden');
      }, 1000);
    };
    return answer;
  });

  //Answer Checking
  if (answer === quiz[randomElement].answer) {
    //Unchecking Radio
    answers.forEach(el => {
      el.checked = false;
    });

    //Increasing Score
    score++;

    //Settimeout
    setTimeout(() => {
      scoreBoard.textContent = `Score : ${score}`;
    }, 1000);

    //Increamenting by 1
    if (randomElement < quiz.length) randomElement++

    //Updating UI
    randomEl();
  } else {
    setTimeout(() => {
      wrongAnswer.classList.add('wrongAnimation');

    }, 1000);

    setTimeout(() => {
      wrongAnswer.classList.remove('wrongAnimation')
    }, 2000);
  };
});

//Question Initailization
randomEl();