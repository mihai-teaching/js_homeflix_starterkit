// ======================================================
// Components / Info Bubble / methods / Get Tooltip Info
// ======================================================

import { APP_STATE } from "../../App/core/constants";

// Helpers
// ======================================================

/**
 * Format a function and its arguments.
 * @param {string} fn Function's name.
 * @param {[string]} args Array of the function's arguments name.
 * @param {string} returnType Function's return type.
 */
const functionHighlightHelper = (fn, args = [], returnType = "void") =>
  `<span class="-function">${fn}( ${args
    .map(arg => `<span class="-argument">${arg}</span>`)
    .join(", ")} ) : <span class="-return">${returnType}</span></span>.`;

const textHighlightHelper = content =>
  `<span class="-highlight">${content}</span>`;

// Alias
const fh = functionHighlightHelper;
const th = textHighlightHelper;

// Export
// ======================================================

/**
 * @param {string} appCurrentState TODO
 * @returns {string} TODO
 */
export default appCurrentState => {
  switch (appCurrentState) {
    case APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "validateUsername",
        ["value"],
        "Boolean"
      )}`;
    case APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "validatePassword",
        ["value"],
        "Boolean"
      )}`;
    case APP_STATE.LOGIN__LOG_INTO_APP:
      return `Press the ${th("Login")} button`;
    case APP_STATE.HEADER__UPDATING_USER_INFOS:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "updateHeader",
        ["username"]
      )}`;
    case APP_STATE.MOVIES__ADDING_SEARCH_FEATURE:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "searchMovies",
        ["movies", "searchValue"],
        "[movies]"
      )}`;
    case APP_STATE.MOVIES__ADDING_ORDER_FILTER_FEATURE:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "sortMovies",
        ["movies", "isAscending"],
        "[movies]"
      )}`;
    case APP_STATE.MOVIES__POPULATE_SELECT:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "populateSelect",
        ["movies"],
        "[string]"
      )}`;
    case APP_STATE.MOVIES__ADDING_GENRE_FILTER_FEATURE:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "filterMovies",
        ["movies", "genreFilter"],
        "[movie]"
      )}`;
    case APP_STATE.MOVIES__DISPLAYING_MOVIE_DATA:
      return `${th("Create")} and ${th("complete")} the function ${fh(
        "displayMovie",
        ["movies"],
        "[movie]"
      )}`;
    default:
      return `You ${th("completed")} the assignment!`;
  }
};
