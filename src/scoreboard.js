/* eslint-disable import/prefer-default-export */

function addScoreNumber(element, object) {
  object.score = parseInt(element.value, 10);
}

export { addScoreNumber };
