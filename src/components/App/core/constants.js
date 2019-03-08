// ======================================================
// App / Core / Constants
// ======================================================

import MOVIES_DATA from "./movies.json";

export const LOADING_SPEED = 400;

export const APP_STATE = {
  LOGIN__ADDING_USERNAME_VALIDATION: 0,
  LOGIN__ADDING_PASSWORD_VALIDATION: 1,
  LOGIN__LOG_INTO_APP: 2,
  HEADER__UPDATING_USER_INFOS: 3,
  MOVIES__ADDING_SEARCH_FEATURE: 4,
  MOVIES__ADDING_ORDER_FILTER_FEATURE: 5,
  MOVIES__POPULATE_SELECT: 6,
  MOVIES__ADDING_GENRE_FILTER_FEATURE: 7,
  MOVIES__DISPLAYING_MOVIE_DATA: 8,
  COMPLETED: 9
};

export const MOVIES = MOVIES_DATA.map(movie => {
  movie.title = movie.title + "";
  return movie;
});
