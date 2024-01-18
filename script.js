const quizData = [
  {
    question: "1.	Isa sa mga sumusunod na salita ay hindi kabilang sa limang makrong kasanayan, ano ito?",
    options: ["Pakikinig", "Pagsasalita", "Panonood", "Pagmamasid"],
    answer: "Pagmamasid"
  },
  {
    question: "2.	Ayon kay ______ , ang pagsusulat ay isang pagpapahayag ng kaalamang kailanman ay hindi maglalaho.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Edwin Mabilin"
    
  },
  {
    question: "3.	Isa itong uri ng Pagsulat na nagpapakilala sa mga pinagkunang kaalaman sa paggawa ng konsepto ng papel.",
    options: ["Reperensiyal na Pagsulat", "Teknikal na Pagpsulat", "Dyornalistik na Pagsulat", "Propesyunal na Pagsulat"],
    answer: "Reperensiyal na Pagsulat"
    
  },
  {
    question: "4. Ito ang pinasimple at pinaikling bersyon ng sulatin o akda.",
    options: ["Abstrak", "Kongklusyon", "Buod", "Lagom"],
    answer: "Lagom"
    
  },
  {
    question: "5.	Ito ay isang uri ng lagom na karaniwang ginagamit sa akademikong papel.",
    options: ["Bionote", "Buod", "Abstrak", "Akademikang Pagsulat"],
    answer: "Abstrak"
    
  },
  {
    question: "6.	Ito ay isang uri ng lagom na ginagamit sa tekstong naratibo tulad ng kwento, parabula , at iba pang panitikan.",
    options: ["Buod", "Kongklusyon", "Bionote", "Lagum"],
    answer: "Buod"
    
  },
  {
    question: "7.	Ito ay isang uri ng lagom  sa pagsulat ng personal profile.",
    options: ["Bionote", "Lagom", "Abstrak", "Memorandum"],
    answer: "Bionote"
    
  },
  {
    question: "8.	Ayon kay Sudprasert(2014), ito ay ang paksang tatalakayin sa pulong.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Adyenda"
    
  },
  {
    question: "9.	Ayon kay Sudprasert(2014), ito ay isang kasulatang nagbibigay ng kabatiran tungkol sa gagawaing pulong o paalala tungkol sa isang mahalagang impormasyon, gawain, tungkulin, o utos.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Memorandum"
    
  },
  {
    question: "10.	Ayon kay ____, may tatlong uri ng memorandum ayon sa layunin nito.",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Bargo"
    
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 180;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerHTML = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="index1.html">Back</a><details><h3>Answers</h3><li>1.Pagmamasid</li><li>2.Edwin Mabilin</li><li>3.Reperensiyal na Pagsulat</li><li>4.Lagom</li><li>5.Abstrak</li><li>6.Buod</li><li>7.Bionote</li><li>8.Adyenda</li><li>9.Memorandum</li><li>10.Bargo</li></details>`;
}

function countdown() {
  const timerElement = document.getElementById("time");
  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    } else {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
    }
  }, 1000);
}

displayQuestion();
countdown();

function link() {
  window.location.href = "index.html";
}