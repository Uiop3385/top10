//pas de triche
const quizQuestions = [
  {
    question: "A combien de reprises Emmanuel Macron est-il apparu dans le Top 10 des pires lapsus à la télévision?",
    choices: ["Une fois", "Deux fois", "Trois fois", "Il n'est pas apparu"],
    answer: "Deux fois"
  },
  {
    question: "Quel logo fait référence à la Bible?",
    choices: ["Google", "FedEx", "Apple", "Carrefour"],
    answer: "Apple"
  },
  {
    question: "Un seul jeu de course ci-dessous est présent dans notre Top 10 des jeux Switch. Lequel?",
    choices: ["Mario Kart 8 Deluxe", "Mario Kart 7", "Garfield Kart", "Mario Kart 8"],
    answer: "Mario Kart 8 Deluxe"
  },
  {
    question: "Selon Gabriel Attal, qui s'est fait enlever?",
    choices: ["Les personnes âgées", "Les EHPAD", "Jean Pierre Pernaud", "Aucun des trois"],
    answer: "Les EHPAD"
  },
  {
    question: "Lequel de ces logos ne contient rien de caché dans l'espace vide?",
    choices: ["Formule 1", "FedEx", "Nintendo Gamecube", "Galeries Lafayette"],
    answer: "Galeries Lafayette"
  },
  {
    question: "Quel chanteur ci-dessous a créé la chanson N°1 de notre Top 10 des meilleures chansons françaises?",
    choices: ["Jacques Brel", "Charles Aznavour", "Edith Piaf", "Léo Ferré"],
    answer: "Jacques Brel"
  },
  {
    question: "Un seul film de Hiyao Miyazaki est présent sur notre Top 10 des meilleurs films. Lequel?",
    choices: ["Ponyo sur la falaise", "Le château ambulant", "Mon voisin Totoro", "Le château dans le ciel"],
    answer: "Le château ambulant"
  },
  {
    question: "Pourquoi les lapsus d'Emmanuel Macron au numéro 9 de notre Top 10 des pires lapsus à la télévision sont-ils corrigés?",
    choices: ["Personne ne l'a corrigé", "La correction a été ajoutée au montage", "Il s'est rendu compte de ses erreurs", "Le caméraman l'a prévenu"],
    answer: "Le caméraman l'a prévenu"
  },
  {
    question: "Laquelle des chansons de notre Top 10 des meilleures chansons françaises a été élue 'Chanson préférée des Français' en 2015?",
    choices: ["Mistral Gagnant", "Djadja", "La nuit je pleure", "Hymne à l'amour"],
    answer: "Mistral Gagnant"
  },
  {
    question: "Un seul film dans notre Top 10 des meilleurs films a eu une suite cette année (2023). Lequel?",
    choices: ["Inception", "Avatar : La voie de l'eau", "Retour vers le Futur", "Matrix"],
    answer: "Avatar : La voie de l'eau"
  }
];

quizQuestions.sort(() => Math.random() - 0.5);

let questionNum = 1;

let quizHTML = `
<div class="quiz">
  <form id="quiz-form">
`;

for (let i = 0; i < quizQuestions.length; i++) {
  quizHTML += `
    <hr>
    <div class="question">
      <h3>Question ${questionNum} : ${quizQuestions[i].question}</h3>
  `;
  const shuffledChoices = quizQuestions[i].choices.sort(() => Math.random() - 0.5);
  for (let j = 0; j < shuffledChoices.length; j++) {
    quizHTML += `
        <label>
          <input type="radio" name="q${i}" value="${shuffledChoices[j]}"> ${shuffledChoices[j]}<br><br>
        </label>
    `;
  }
  quizHTML += `
    </div>
  `;
  questionNum++;
}

quizHTML += `
    <hr>
    <div class="submit-quiz">
      <input type="submit" value="Valider"/>
    </div>
  </form>
</div>
`;

document.getElementById("container").innerHTML = quizHTML;