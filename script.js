/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const answers = {};
const question_one = document.getElementById('question-1');
const question_two = document.getElementById('question-2');
const question_three = document.getElementById('question-3');
const question_four = document.getElementById('question-4');
const question_five = document.getElementById('question-5');
function storeAnswer(question_number, event) {
  if (event.target.type === 'radio') {
    console.log(event.target.value);
    answers[`question${question_number}`] = parseInt(event.target.value);
    console.log(answers);
  }
}

question_one.addEventListener('click', (e) => {
  storeAnswer(1, e);
});
question_two.addEventListener('click', (e) => {
  storeAnswer(2, e);
});
question_three.addEventListener('click', (e) => {
  storeAnswer(3, e);
});
question_four.addEventListener('click', (e) => {
  storeAnswer(4, e);
});
question_five.addEventListener('click', (e) => {
  storeAnswer(5, e);
});

function totalScore() {
  const total_score = +answers.question1
  + answers.question2
  + answers.question3
  + answers.question4
  + answers.question5;

  return total_score;
}

function infoBrasedOnScored() {
  let score_info;
  if (totalScore() < 7) {
    score_info = 'Você precisa tomar mais cuidado com a segurança da sua conta!';
  } if (totalScore() >= 7 && totalScore() < 12) {
    score_info = 'Você não está ruim, mas pode melhorar sua segurança!';
  } else if (totalScore() >= 12) {
    score_info = 'Parabéns, você está bem de segurança!';
  }
  return score_info;
}

const submit1 = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');
const submit3 = document.getElementById('submit3');
const submit4 = document.getElementById('submit4');
const submit5 = document.getElementById('submit5');

function nextQuestion(question_number) {
  const current_question_number = question_number - 1;
  const question_number_string = question_number.toString();
  const current_question_number_string = current_question_number.toString();
  const el = document.getElementById(`question-${question_number_string}`);
  const el2 = document.getElementById(`question-${current_question_number_string}`);
  el.style.display = 'block';
  el2.style.display = 'none';
}

submit1.addEventListener('click', () => {
  nextQuestion(2);
  growProgressBar('30%');
});
submit2.addEventListener('click', () => {
  nextQuestion(3);
  growProgressBar('50%');
});
submit3.addEventListener('click', () => {
  nextQuestion(4);
  growProgressBar('70%');
});
submit4.addEventListener('click', () => {
  nextQuestion(5);
  growProgressBar('80%');
});
submit5.addEventListener('click', () => {
  growProgressBar('92.5%');
  nextQuestion(6);
});

submit5.addEventListener('click', () => {
  document.getElementById('printtotalscore').innerHTML = totalScore();
  document.getElementById('printscoreinfo').innerHTML = infoBrasedOnScored();
});

function growProgressBar(percentage_width) {
  const bar = document.getElementById('progress_bar');
  bar.style.width = percentage_width;
}
