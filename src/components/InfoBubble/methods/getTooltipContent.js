// ======================================================
// Components / Info Bubble / methods / Get Tooltip Info
// ======================================================

import { APP_STATE } from "../../App/core/constants";

// Helpers
// ======================================================

const createCode = content => `<span class="-code">${content}</span>`;
const createHighlight = content => `<span class="-highlight">${content}</span>`;

// Alias
const cc = createCode;
const ch = createHighlight;

// Export
// ======================================================

/**
 * @param {string} appCurrentState TODO
 * @returns {string} TODO
 */
export default appCurrentState => {
  switch (appCurrentState) {
    case APP_STATE.LOGIN__ADDING_USERNAME_VALIDATION:
      return `You must ${ch("create")} and ${ch("complete")} the function ${cc(
        "usernameValidation()"
      )}.`;
    case APP_STATE.LOGIN__ADDING_PASSWORD_VALIDATION:
      return `You must ${ch("create")} and ${ch(
        "complete"
      )} the function <span class="-code">passwordValidation()</span>.`;

    case APP_STATE.HEADER__UPDATING_USER_INFOS:
    case APP_STATE.MOVIES__ADDING_SEARCH_FEATURE:
    case APP_STATE.MOVIES__ADDING_ORDER_FILTER_FEATURE:
    case APP_STATE.MOVIES__ADDING_GENRE_FILTER_FEATURE:
    default:
      return "";
  }
};
