import store from '../redux';
import {getData} from '../services/restAPIService';
import * as moviesReducer from '../redux/movies';
import * as configReducer from '../redux/config';

export const getMoviesBySearchValueFromServer = async searchMovieName => {
  store.dispatch(configReducer.configDataLoading(true));
  const result = await getData(`&s=${searchMovieName}`);
  if (result.data.Search) {
    store.dispatch(moviesReducer.listMoviesSetData(result.data.Search));
  }
  store.dispatch(configReducer.configDataLoading(false));
};

export const getMovieByIdFromServer = async movieId => {
  store.dispatch(configReducer.configDataLoading(true));
  const result = await getData(`&i=${movieId}`);
  if (result.data) {
    store.dispatch(moviesReducer.listMoviesSetSelectedMovieData(result.data));
  }
  store.dispatch(configReducer.configDataLoading(false));
};
