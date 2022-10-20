let homeScoreEl = document.getElementById("homescore");
let awayScoreEl = document.getElementById("awayscore");

let score = 0;
let updatedScore = 0;

function add1() {
  updatedScore = score + 1;
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + updatedScore;
}

function add2() {
  updatedScore = score + 2;
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + updatedScore;
}

function add3() {
  updatedScore = score + 3;
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + updatedScore;
}

function add1away() {
  updatedScore = score + 1;
  awayScoreEl.textContent = parseInt(awayScoreEl.textContent) + updatedScore;
}

function add2away() {
  updatedScore = score + 2;
  awayScoreEl.textContent = parseInt(awayScoreEl.textContent) + updatedScore;
}

function add3away() {
  updatedScore = score + 3;
  awayScoreEl.textContent = parseInt(awayScoreEl.textContent) + updatedScore;
}
