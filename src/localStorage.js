const saveLocalStorage = (array) => {
  localStorage.setItem('Scoreboard', JSON.stringify(array));
};

const renderLocalStorage = (element, array) => {
  array.forEach((object) => {
    element.insertAdjacentHTML('beforeend', `<li>${object.name}: ${object.score}</li>`);
  });
};

const clearLocalStorage = () => {
  const array = [];
  localStorage.setItem('Scoreboard', JSON.stringify(array));
};

export { saveLocalStorage, renderLocalStorage, clearLocalStorage };
