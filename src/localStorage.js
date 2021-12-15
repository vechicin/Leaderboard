function saveLocalStorage(array) {
  localStorage.setItem('Scoreboard', JSON.stringify(array));
};

function renderLocalStorage(element, array) {
  array.forEach(object => {
    element.insertAdjacentHTML('beforeend', `<li>${object.name}: ${object.score}</li>`);
  });
};

function clearLocalStorage() {
  const array = [];
  localStorage.setItem('Scoreboard', JSON.stringify(array));
}

export { saveLocalStorage, renderLocalStorage, clearLocalStorage };
