// IMPORTS
import './style.css';
import addScoreNumber from './scoreboard.js';
import { saveLocalStorage, renderLocalStorage, clearLocalStorage } from './localStorage.js';

// ELEMENTS
const scoreContainer = document.querySelector('ul');
const scoreArr = JSON.parse(localStorage.getItem('Scoreboard')) || [];
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitButton = document.querySelector('#submit-button');
const refreshButton = document.querySelector('.refresh-button');

// FUNCTIONS
const scoreObj = (name) => ({ name, score: 0 });

renderLocalStorage(scoreContainer, scoreArr);

// EVENT LISTENERS
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const scoreName = nameInput.value;
  if (scoreName === '') return;
  const object = scoreObj(scoreName);
  scoreArr.push(object);
  addScoreNumber(scoreInput, object);
  scoreContainer.insertAdjacentHTML('beforeend', `<li>${object.name}: ${object.score}</li>`);
  saveLocalStorage(scoreArr);
  nameInput.value = '';
  scoreInput.value = null;
});

refreshButton.addEventListener('click', () => {
  scoreContainer.innerHTML = '';
  clearLocalStorage();
});
