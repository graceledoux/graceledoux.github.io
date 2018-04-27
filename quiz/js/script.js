(function() {
  function buildQuiz() {
    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];


      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }


      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Chameleons change colour to match their surroundings.",
      answers: {
        a: "Yes! They're some of the most effective camoflauge experts in the animal kingdom.",
        b: "Nope! They change color according to mood, temperature, and light, not the object they're touching.",

      },
      correctAnswer: "b"
    },
    {
      question: "You lose your body heat fastest through your head.",
      answers: {
        a: "True. It's most effective to wear a hat in the cold to keep warm.",
        b: "Actually, experts say it doesn't really make a difference. The top of your head is such a small part of your body, you're not going to lose an enormous amount of heat.",

      },
      correctAnswer: "b"
    },
    {
      question: "The word PEZ comes from the German word for peppermint: PfeffErminZ.",
      answers: {
        a: "That's true!",
        b: "Nope. PEZ are all-American, invented by Cornell student Paul Edgar Zine in the 40s as an alternative to smoking cigarettes.",
      },
      correctAnswer: "a"
    },
    {
      question: "Reed Hastings has said that he was inspired to start Netflix because he hated having to fight traffic on the way to the movie rental store.",
      answers: {
        a: "Correct! He decided being able to mail-order DVDs and skip the trip to the store would be way better.",
        b: "Actually, Hastings started the company after a $40 late fee on a VHS copy of Appollo 13.",
      },
      correctAnswer: "b"
    },
    {
      question: "Caffeine dehydrates you.",
      answers: {
        a: "True! Its diuretic effect makes you pee more, dehydrating you.",
        b: "Nope. Caffeine doesn't affect your risk of dehydration at all.",
      },
      correctAnswer: "b"
    },
    {
      question: "The average cumulus cloud weighs rougly 1.1 million pounds.",
      answers: {
        a: "That's right!",
        b: "False. Although clouds are made of condensed water, they aren't incredibly dense, weighing closer to 500,000 pounds.",
      },
      correctAnswer: "a"
    }
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
