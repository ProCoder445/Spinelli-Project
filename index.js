let form = document.querySelector("form");
let score = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  score = 0;
  let data = new FormData(form);
  let answerArray = {
    questions: [],
    answers: []
  };

  let answers = {
    "Question 1": "Jory John",
    "Question 2": "The Bad Seed",
    "Question 3": "true"
  }
  for (let [key, value] of data.entries()) {
    answerArray.questions.push(key);
    answerArray.answers.push(value);
  }

  for (let i = 0; i < answerArray.questions.length; i++) {
    let question = answerArray.questions[i];
    let userAnswer = answerArray.answers[i];

    if (
      userAnswer.trim().toLowerCase() ===
      answers[question].trim().toLowerCase()
    ) {
      score++;
    }
  }
  score = (score / 3) * 100;

  document.querySelector("#answer_image").innerHTML = score;
  
  
   
});
