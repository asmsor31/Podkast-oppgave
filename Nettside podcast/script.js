const quizData = [
    {
      question: 'Hva mener podkasten er en av de største ulempene ved at ungdom bruker KI for mye på skoleoppgaver?',
      options: ["De får for mange lekser.", "De lærer mindre og blir mindre selvstendige.", "De bruker mer tid på å finne informasjon.", "De blir flinkere til å vurdere kilder."],
      answer: "De lærer mindre og blir mindre selvstendige."
    },
    {
      question: 'Hva er deepfakes et eksempel på?',
      options: ["Falskt innhold som kan ligne på ekte personer eller stemmer.", "Et program som hjelper elever med matematikk.", "En søkemotor som finner troverdige kilder.", "En metode for å rette skrivefeil."],
      answer: "Falskt innhold som kan ligne på ekte personer eller stemmer."
    },
    {
      question: 'Hva slags anbefalinger kom Regjeringen og Utdanningsdirektoratet med?',
      options: ["Bruke mer KI til skolearbeid.", "Ikke bruke KI fra 1. - 7. trinn.", "Fullstendig ingen KI på skole.", ""],
      answer: "Ikke bruke KI fra 1. - 7. trinn."
    },
    {
      question: 'Ifølge Medietilsynet Barn og medier 2026, hvor mange prosent bruker kunstelig intelligens som en "KI-venn"?',
      options: ["20%", "15%", "10%", "5%"],
      answer: "15%"
    },
    {
      question: 'Søkemotorer ble brukt 72% i 2024. Hvor mange prosent blir de brukt i 2026?',
      options: ["66%", "59%", "47%", "42%"],
      answer: "47%"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Ferdig!</h1>
      <p>Du fikk ${score}/${quizData.length} riktige! </p>
      
      <div style="display: flex; justify-content: center; width: 100%;">
      <button id="prøv_igjen" type="button"
      onclick="window.location.href='https://jasvil21.imkatta.no/podkast/quiz'">
      Prøve igjen?
      </button>
      </div>
    `;
  }
  
  showQuestion();