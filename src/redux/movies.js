export const MOVIES_SET_DATA = 'MOVIES_SET_DATA';
export const MOVIES_SET_SELECTED_MOVIE_DATA = 'MOVIES_SET_SELECTED_MOVIE_DATA';
export const MOVIES_UPDATE_DATA = 'MOVIES_UPDATE_DATA';
export const MOVIES_CLEAN_SELECTED_MOVIE_DATA =
  'MOVIES_CLEAN_SELECTED_MOVIE_DATA';
export const MOVIES_CLEAN = 'MOVIES_CLEAN';

export const listMoviesSetData = data => ({
  type: MOVIES_SET_DATA,
  data,
});

export const listMoviesSetSelectedMovieData = data => ({
  type: MOVIES_SET_SELECTED_MOVIE_DATA,
  data,
});

export const listMoviesUpdateData = data => ({
  type: MOVIES_UPDATE_DATA,
  data,
});

export const listMoviesCleanSelectedMovieData = () => ({
  type: MOVIES_CLEAN_SELECTED_MOVIE_DATA,
});

export const listMoviessClean = () => ({
  type: MOVIES_CLEAN,
});

const initialState = {
  listMovies: [],
  selectedMovieData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SET_DATA:
      return {
        ...state,
        listMovies: action.data,
      };
    case MOVIES_SET_SELECTED_MOVIE_DATA:
      return {
        ...state,
        selectedMovieData: action.data,
      };
    case MOVIES_UPDATE_DATA:
      return {
        ...state,
        listMovies: [...state.listMovies, ...action.data],
      };
    case MOVIES_CLEAN_SELECTED_MOVIE_DATA:
      return {
        ...state,
        selectedMovieData: {},
      };
    case MOVIES_CLEAN:
      return initialState;
    default:
      return state;
  }
};
