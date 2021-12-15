// IMPORTS
import './style.css';
import { addScoreNumber } from './scoreboard.js';

// ELEMENTS
const scoreContainer = document.querySelector('ul');
const scoreArr = [];
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitButton = document.querySelector('#submit-button');
const refreshButton = document.querySelector('.refresh-button');

// FUNCTIONS
function scoreObj(name) {
  return { name : name, score : 0};
};

// EVENT LISTENERS
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const scoreName = nameInput.value;
  const object = scoreObj(scoreName);
  addScoreNumber(scoreInput, object);
  scoreContainer.insertAdjacentHTML('beforeend', `<li>${object.name}: ${object.score}</li>`)
})
