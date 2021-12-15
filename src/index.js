// IMPORTS
import './style.css';
import APIsetup from './APIsetup.js';

// ELEMENTS
const scoreContainer = document.querySelector('ul');
const submissionForm = document.querySelector('form');
const refreshButton = document.querySelector('.refresh-button');
let gameIndex = '';


// FUNCTIONS
const renderScores = async () => {
  const data = await APIsetup.getScores(gameIndex);
  if (data.result.length <= 0) {
    scoreContainer.style.display = 'none';
  }
  scoreContainer.style.display = '';
  scoreContainer.innerHTML = data.result.map((obj) => `<li>${obj.user}: ${obj.score}</li>`).join('');
}

const getLocalStorage = localStorage.getItem('Game Index');
if (!getLocalStorage) {
  APIsetup.gameTitle().then(() => {
    gameIndex = localStorage.getItem('Game Index');
  });
} else {
  gameIndex = localStorage.getItem('Game Index');
  renderScores();
}


// EVENT LISTENERS
submissionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (submissionForm.name.value === '' || submissionForm.score.value === null) return;
  APIsetup.addScore(gameIndex, submissionForm.name.value, submissionForm.score.value);
  submissionForm.name.value = '';
  submissionForm.score.value = null;
  renderScores()
});

refreshButton.addEventListener('click', renderScores);
