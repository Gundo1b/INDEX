
// DOM Elements
const spiceScreen = document.getElementById("spice-screen");
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");

const selectPlayersBtn = document.querySelector("#spice-screen .action-btn");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector("#game-screen .action-btn");

const challengeTitle = document.querySelector(".challenge-card h3");
const challengeText = document.querySelector(".challenge-card p");
const playerName = document.querySelector("#game-screen h2");

// Sample Data
const players = ["John", "Amy", "Ben", "Sarah"];
const truths = [
  "What's your biggest fear?",
  "What's a secret you've never told anyone?",
  "Who was your first crush?",
  "Have you ever lied to your best friend?"
];

const dares = [
  "Show everyone your most embarrassing photo.",
  "Do 10 push-ups right now.",
  "Sing a song loudly.",
  "Act like a cat for 1 minute."
];

// Functions
function showScreen(screen) {
  [spiceScreen, homeScreen, gameScreen].forEach(s => s.style.display = "none");
  screen.style.display = "flex";
}

function randomChallenge() {
  const isDare = Math.random() > 0.5;
  const player = players[Math.floor(Math.random() * players.length)];

  playerName.textContent = player;
  challengeTitle.textContent = isDare ? "Dare" : "Truth";
  challengeText.textContent = isDare
    ? dares[Math.floor(Math.random() * dares.length)]
    : truths[Math.floor(Math.random() * truths.length)];
}

// Event Listeners
selectPlayersBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

playBtn.addEventListener("click", () => {
  showScreen(gameScreen);
  randomChallenge();
});

nextBtn.addEventListener("click", () => {
  randomChallenge();
});
