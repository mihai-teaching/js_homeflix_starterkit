// ======================================================
// Helpers / Get Data
// ======================================================

/* eslint-disable */

const getFunction = obj => (obj && typeof obj === "function" ? obj : null);

export default {
  validateUsername: getFunction(validateUsername),
  validatePassword: getFunction(validatePassword),
  updateHeader: getFunction(updateHeader),
  getOptions: getFunction(getOptions),
  searchMovies: getFunction(search),
  filterMovies: getFunction(search),
  sortMovies: getFunction(search),
  displayMovie: getFunction(displayMovie)
};
