// ======================================================
// Helpers / Get Data
// ======================================================

/* eslint-disable */

// Helpers
import { getTypeError } from "./errors";

// Define undeclared variables and check type of declared variables
let obj = null;
let expectedType = null;
if (window && typeof window === "object") {
  [
    [Function, "validateUsername"],
    [Function, "validatePassword"],
    [Function, "updateHeader"],
    [Function, "populateFilter"],
    [Function, "searchMovies"],
    [Function, "filterMovies"],
    [Function, "sortMovies"],
    [Function, "displayMovie"]
  ].forEach(([type, varName]) => {
    obj = window[varName];
    expectedType = type.name.toLowerCase();
    if (!obj || typeof obj === "undefined") {
      window[varName] = null;
    } else if (typeof obj !== expectedType) {
      console.error(
        getTypeError("Student's Script", obj, varName, expectedType)
      );
    }
  });
} else console.error("Window object is missing");

export default {
  validateUsername,
  validatePassword,
  updateHeader,
  populateFilter,
  searchMovies,
  filterMovies,
  sortMovies,
  displayMovie
};
