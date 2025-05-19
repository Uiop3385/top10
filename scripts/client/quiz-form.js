var form = document.getElementById("quiz-form");
let score = 0;
function submitForm(event) {
  event.preventDefault();
  for (let i = 0; i < quizQuestions.length; i++) {
    let selectedChoice = document.querySelector(`input[name=q${i}]:checked`);
    if (selectedChoice && selectedChoice.value === quizQuestions[i].answer) {
      score++;
    }
  }
  alert(`Votre score est de ${score}/${quizQuestions.length}.`);
  score = 0;
  location.reload();
}
form.addEventListener('submit', submitForm);