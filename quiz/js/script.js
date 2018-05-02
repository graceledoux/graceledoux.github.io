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
        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} right. Did you learn something?`;
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
      question: "The word PEZ comes from the German word for peppermint: Pfefferminz.",
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
      question: "Reno, Nevada is farther west than Los Angeles.",
      answers: {
        a: "True!",
        b: "No way.",
      },
      correctAnswer: "a"
    },
    {
      question: "Only male mosquitoes will bite you.",
      answers: {
        a: "That's right! The males are bigger and require more blood.",
        b: "Nope. Actually, only females will bite you.",
      },
      correctAnswer: "b"
    },
    {
      question: "The little BIC pen logo guy has a name. It's BIC Boy.",
      answers: {
        a: "Unfortunately, that's true.",
        b: "He actually doesn't have a name.",
      },
      correctAnswer: "a"
    },
    {
      question: "Humans have five senses.",
      answers: {
        a: "It's been looked into extensively, and experts agree there are indeed five core senses.",
        b: "There's actually debate on this; some scientists think we have up to 21!",
      },
      correctAnswer: "b"
    },
    {
      question: "A goldfish's memory is about 3 seconds long.",
      answers: {
        a: "True: their brains don't have a designated area for memory storage, and they're generally more concerned with day to day survival.",
        b: "Nope! A goldfish can remember something for up to 3 months.",
      },
      correctAnswer: "b"
    },
    {
      question: "The sum of all the numbers on a roulette wheel is 666.",
      answers: {
        a: "Spooky and true.",
        b: "Actually, they add up to 1,234.",
      },
      correctAnswer: "a"
    },
    {
      question: "Judge Judy makes $25 million a year.",
      answers: {
        a: "Yes! She's one of the most successful long-term TV personalities.",
        b: "Um, more like $45 million per year.",
      },
      correctAnswer: "b"
    },
    {
      question: "Horses can't vomit.",
      answers: {
        a: "That's true and really unfortunate, because this causes them to colic and can be life-threatening.",
        b: "Of course horses can vomit.",
      },
      correctAnswer: "a"
    },
    {
      question: "Vikings wore their iconic horned helmets to intimidate their enemies by making their silhouettes less human.",
      answers: {
        a: "Yes and it worked! People learned to fear the horned outline.",
        b: "Nope. A costume designer came up with the horned helmets for a 19th century opera.",
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


window.onscroll = function() {scrollbar()};

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("Bar").style.width = scrolled + "%";
}
