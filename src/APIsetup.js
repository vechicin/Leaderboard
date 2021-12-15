const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const gameTitle = () => fetch(
    `${apiUrl}/games/`,
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('Game Index', data.result.split(' ')[3]);
  });

const addScore = (gameIndex, name, score) => {
  fetch(
    `${apiUrl}/games/${gameIndex}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
  .then((response) => response.json());
};

const getScores = (gameIndex) => fetch(`${apiUrl}/games/${gameIndex}/scores`).then((response) => response.json());

export default { gameTitle, addScore, getScores };
