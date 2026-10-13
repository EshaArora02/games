/*
 * LOVE DIVE — customise the questions, accepted answers, tier copy and final message below.
 * This is a private, local scoring system, not real crowd-sourced rarity data.
 * Matching uses case-insensitive substring checks; keep accepted phrases distinctive.
 */

const QUESTIONS = [
  {
    prompt: "Name something that reminds you of us.",
    hint: "Think beyond the obvious. The more unexpected the answer, the rarer it might be.",
    accepted: {
      obvious: ["our photos", "our date", "your smile", "your laugh"],
      uncommon: ["that song", "the beach", "late night talks", "our first date"],
      rare: ["the silly thing we do", "that random place", "the way you look at me"],
      krillion: ["our inside joke", "the tiny detail only we know"]
    }
  },
  {
    prompt: "What is a tiny moment with me you wish you could replay?",
    hint: "It doesn't have to be a big milestone. The little moments count.",
    accepted: {
      obvious: ["our anniversary", "our holiday", "our first date"],
      uncommon: ["cuddling", "watching a movie", "walking together"],
      rare: ["when we couldn't stop laughing", "that quiet moment", "the drive home"],
      krillion: ["the moment you remember in detail"]
    }
  },
  {
    prompt: "What do you think is my most underrated quality?",
    hint: "Go past the obvious. What do you notice that other people might miss?",
    accepted: {
      obvious: ["kind", "funny", "pretty", "smart"],
      uncommon: ["thoughtful", "patient", "determined", "creative"],
      rare: ["how you make people feel", "how hard you try", "your little acts of care"],
      krillion: ["a very specific quality only you have noticed"]
    }
  },
  {
    prompt: "If our relationship had a secret theme song, what would it be?",
    hint: "A song, a lyric, or even a sound that instantly feels like us.",
    accepted: {
      obvious: ["our song", "love song", "perfect", "all of me"],
      uncommon: ["a song from our playlist", "the song from that night"],
      rare: ["a song tied to a specific memory", "that song you sent me"],
      krillion: ["the exact song and the reason it is ours"]
    }
  },
  {
    prompt: "What is something very 'us' that nobody else would understand?",
    hint: "An inside joke, a ritual, a look, a phrase. Your private little universe.",
    accepted: {
      obvious: ["our jokes", "our nicknames", "our texts"],
      uncommon: ["the way we talk", "our weird habits", "our code word"],
      rare: ["that specific inside joke", "the phrase we always say"],
      krillion: ["a precise detail from our private universe"]
    }
  },
  {
    prompt: "When do you feel closest to me?",
    hint: "Try to picture the moment, not just describe the feeling.",
    accepted: {
      obvious: ["when we're together", "when we hug", "when we kiss"],
      uncommon: ["when we talk", "when we travel", "when we're cuddling"],
      rare: ["when we laugh at the same thing", "when we talk late at night"],
      krillion: ["a very specific moment when you felt completely understood"]
    }
  },
  {
    prompt: "What's one little thing you hope we never stop doing?",
    hint: "Imagine us years from now. What small thing should stay ours?",
    accepted: {
      obvious: ["saying i love you", "hugging", "kissing", "going on dates"],
      uncommon: ["sending good morning texts", "making each other laugh"],
      rare: ["our little routine", "being silly together", "checking in on each other"],
      krillion: ["a specific tradition or tiny habit that belongs to us"]
    }
  }
];

const TIERS = {
  obvious: { label: "A LITTLE TOO OBVIOUS", points: 10, copy: "A classic answer. But our story has so many tiny details hiding beneath the surface." },
  uncommon: { label: "A LITTLE UNEXPECTED", points: 30, copy: "Okay, there's some thought behind that. You're starting to explore the deeper water." },
  rare: { label: "RARE FIND", points: 60, copy: "That's a lovely little detail. Not everyone would think of that." },
  krillion: { label: "ONE IN A KRILLION", points: 100, copy: "You found one of the hidden pearls. The tiny details are what make our world ours." },
  timeout: { label: "THE OCEAN GOT YOU", points: 0, copy: "Time slipped away. That's okay. There are still a million little things to discover." }
};

const FINAL_MESSAGE = "No matter how deep you dive, you're still my favourite person.";
const SIGNOFF = "Made with love, just for you ♡";
const SECONDS_PER_QUESTION = 25;

const screens = {
  intro: document.getElementById("intro-screen"),
  question: document.getElementById("question-screen"),
  reveal: document.getElementById("reveal-screen"),
  final: document.getElementById("final-screen")
};
const startButton = document.getElementById("start-button");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");
const replayButton = document.getElementById("replay-button");
  const diveOverlay = document.getElementById("dive-overlay");
  const diveDepthNumber = document.getElementById("dive-depth-number");
  const diveDepthCaption = document.getElementById("dive-depth-caption");
  let diveInProgress = false;
let questionIndex = 0;
let totalScore = 0;
let timerInterval = null;
let secondsLeft = SECONDS_PER_QUESTION;
let answered = false;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  function setDepth(index) {
    const depth = ["SURFACE LEVEL", "SUNLIT ZONE", "BLUE WATER", "THE TWILIGHT ZONE",
      "THE DEEP", "ABYSSAL ZONE", "HIDDEN GARDEN", "OCEAN HEART"];
    document.getElementById("depth-label").textContent = depth[Math.min(index, depth.length - 1)];
    document.body.classList.remove("depth-1", "depth-2", "depth-3", "depth-4", "depth-5", "depth-6", "depth-7");
    if (index > 0) document.body.classList.add(`depth-${Math.min(index, 7)}`);
    document.body.classList.toggle("deep-dive", index >= 3);
  }

    function playDiveAnimation(score, questionNumber, onComplete) {
    if (diveInProgress) return;
    diveInProgress = true;
    const depthMetres = Math.round((score / (QUESTIONS.length * 100)) * 700);
    const captions = ["THE SUNLIT ZONE", "BLUE WATER", "THE TWILIGHT ZONE",
      "THE DEEP", "ABYSSAL ZONE", "HIDDEN GARDEN", "OCEAN HEART"];
    diveDepthNumber.textContent = `${depthMetres} m`;
    diveDepthCaption.textContent = captions[Math.min(questionNumber - 1, captions.length - 1)];
    diveOverlay.classList.remove("active", "descending");
    // Restart CSS animation reliably.
    void diveOverlay.offsetWidth;
    diveOverlay.classList.add("active");
    document.body.classList.add("diving-now");
    window.setTimeout(() => diveOverlay.classList.add("descending"), 90);
    window.setTimeout(() => {
      diveOverlay.classList.remove("active", "descending");
      diveInProgress = false;
      document.body.classList.remove("diving-now");
      onComplete();
    }, 1450);
  }

function startGame() {
  questionIndex = 0;
  totalScore = 0;
  clearInterval(timerInterval);
  document.body.classList.remove("deep-dive");
  setDepth(0);
  showQuestion();
}

function showQuestion() {
  answered = false;
  secondsLeft = SECONDS_PER_QUESTION;
  const q = QUESTIONS[questionIndex];
  document.getElementById("question-count").textContent = `QUESTION ${String(questionIndex + 1).padStart(2, "0")} / ${String(QUESTIONS.length).padStart(2, "0")}`;
  document.getElementById("question-title").textContent = q.prompt;
  document.getElementById("question-hint").textContent = q.hint;
  document.getElementById("timer").textContent = secondsLeft;
  document.getElementById("progress-bar").style.width = `${(questionIndex / QUESTIONS.length) * 100}%`;
  document.getElementById("char-count").textContent = "0 / 180";
  answerInput.value = "";
  answerInput.disabled = false;
  submitButton.disabled = false;
  submitButton.innerHTML = 'Lock in answer <span>↗</span>';
  showScreen("question");
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft -= 1;
    document.getElementById("timer").textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) lockAnswer(true);
    }
  }, 1000);
  setTimeout(() => answerInput.focus({ preventScroll: true }), 100);
}

function classifyAnswer(answer, question) {
  const normalised = answer.toLowerCase().trim().replace(/[.,!?'"’]/g, "");
  if (!normalised) return "timeout";
  const accepted = question.accepted;
  // Highest tier wins if a phrase appears in more than one list.
  for (const tier of ["krillion", "rare", "uncommon", "obvious"]) {
    if ((accepted[tier] || []).some(phrase => normalised.includes(phrase.toLowerCase()))) return tier;
  }
  // Unlisted answers are treated as a surprise rather than pretending to know population rarity.
  return "rare";
}

function lockAnswer(timedOut = false) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  const answer = answerInput.value.trim();
  const tierKey = timedOut && !answer ? "timeout" : classifyAnswer(answer, QUESTIONS[questionIndex]);
  const tier = TIERS[tierKey];
  totalScore += tier.points;
  answerInput.disabled = true;
  document.getElementById("answer-recap").textContent = answer || "A moment of silence...";
  const badge = document.getElementById("tier-badge");
  badge.textContent = tier.label;
  badge.className = "tier-badge";
  if (tierKey === "rare") badge.classList.add("tier-rare");
  if (tierKey === "krillion") badge.classList.add("tier-krillion");
  document.getElementById("tier-copy").textContent = tier.copy;
  document.getElementById("score-value").textContent = totalScore;
  nextButton.innerHTML = questionIndex === QUESTIONS.length - 1 ? 'See your results <span>♡</span>' : 'Keep diving <span>↓</span>';
  playDiveAnimation(totalScore, questionIndex + 1, () => {
    setDepth(questionIndex + 1);
    showScreen("reveal");
  });
}

function finishGame() {
  document.getElementById("final-score").textContent = totalScore;
  document.getElementById("final-depth").textContent = totalScore >= 500 ? "∞" : `${Math.round(totalScore / 7)}%`;
  document.getElementById("final-message").textContent = FINAL_MESSAGE;
  document.getElementById("signoff").textContent = SIGNOFF;
  document.getElementById("progress-bar").style.width = "100%";
  setDepth(7);
  showScreen("final");
}

startButton.addEventListener("click", startGame);
answerForm.addEventListener("submit", event => {
  event.preventDefault();
  lockAnswer(false);
});
answerInput.addEventListener("input", () => {
  document.getElementById("char-count").textContent = `${answerInput.value.length} / 180`;
});
nextButton.addEventListener("click", () => {
  if (questionIndex < QUESTIONS.length - 1) {
    questionIndex += 1;
    playDiveAnimation(QUESTIONS[questionIndex - 1] ? TIERS.rare.points : 0, questionIndex + 1, showQuestion);
  } else {
    finishGame();
  }
});
replayButton.addEventListener("click", startGame);
