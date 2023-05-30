const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const end = document.getElementById("end-container");
const settingBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const difficulty = document.getElementById("difficulty");

// list of words for game

words = [
  "ambiguous",
  "chicken",
  "ambivalent",
  "bureau",
  "benevolent",
  "condescend",
  "disco",
  "data",
  "contempt",
  "illusion",
  "konica",
  "document",
  "digital",
  "narcissistic",
  "necessary",
  "zucchini",
  "fiction",
  "highway",
  "ethereum",
  "zoo",
  "fork",
];

// initial word
let randomWord;

// initial score
let score = 0;

// initial time
let time = 10;

// focus text on start
text.focus();

// start timer
const timeInterval = setInterval(updateTime, 1000);

// random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// update score
function addScore() {
  score++;
  scoreEl.innerHTML = score;
}

// update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    //   end game
    gameOver();
  }
}

// game over , show end screen
function gameOver() {
  end.innerHTML = `
    <h1>Time's Out</h1>
    <p>Final Score is ${score}</p>
    <button onclick='location.reload()'>Restart</button>`;

  end.style.display = "flex";
}

addWordToDOM();

// event listener

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  //   console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();
    addScore();
    time = time + 5;
    timeEl.innerHTML = time + "s";
    // clear
    e.target.value = "";
  }
});
