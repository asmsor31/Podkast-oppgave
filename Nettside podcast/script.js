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
      options: ["KI skal brukes mer til skolearbeid.", "Ikke bruke KI fra 1. - 7. trinn.", "Fullstendig ingen KI på skole.", "Hver elev skal ha en maks de kan bruke KI hver skoleuke."],
      answer: "Ikke bruke KI fra 1. - 7. trinn."
    },
    {
      question: 'Hva kan KI brukes til på en positiv måte ifølge Vemund?',
      options: ["Å gjøre all skolearbeidet for eleven.", "Å erstatte lærere og klassekamerater.", "Å forstå vanskelige tekster og rette språkfeil.", "Å sørge for at all informasjon på nettet er riktig."],
      answer: "Å forstå vanskelige tekster og rette språkfeil."
    },
    {
      question: 'Ifølge Medietilsynet Barn og medier 2026, hvor mange prosent bruker kunstig intelligens som en "KI-venn"?',
      options: ["20%", "15%", "10%", "5%"],
      answer: "15%"
    },
    {
      question: 'Søkemotorer ble brukt 72% i 2024. Hvor mange prosent blir de brukt i 2026?',
      options: ["66%", "59%", "47%", "42%"],
      answer: "47%"
    },
    {
      question: 'Hvor stor andel av 15–18-åringene bruker KI ifølge tallene i podkasten?',
      options: ["Rundt 14 prosent.", "Rundt 39 prosent.", "Rundt 50 prosent.", "Over 70 prosent."],
      answer: "Over 70 prosent."
    },
    {
      question: 'Hva brukes KI mest til blant ungdom ifølge undersøkelsen?',
      options: ["Underholdning.", "Å søke etter eller finne informasjon.", "Å lage bilder og videoer.", "Å snakke med en KI-venn."],
      answer: "Å søke etter eller finne informasjon."
    },
    {
      question: 'Hva mener Åsmund at skolen bør lære elevene om KI?',
      options: ["At KI aldri kan brukes i skolen.", "At KI alltid har rett.", "At KI bør gjøre alle oppgavene for elevene.", "Å bruke KI smart og kritisk, uten å slutte å tenke selv."],
      answer: "Å bruke KI smart og kritisk, uten å slutte å tenke selv."
    },
    {
      question: 'Hvor stor andel av ungdommene bruker KI til å søke etter eller finne informasjon?',
      options: ["21 prosent.", "33 prosent.", "71 prosent.", "78 prosent."],
      answer: "78 prosent."
    },
    {
      question: 'Hva er en mulig risiko ved å bruke KI som en venn?',
      options: ["At man kan erstatte ekte menneskelig kontakt med KI.", "At man automatisk blir bedre til å forstå andre mennesker.", "At KI alltid blir sint på brukeren.", "At man mister tilgangen til internett."],
      answer: "At man kan erstatte ekte menneskelig kontakt med KI."
    }
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