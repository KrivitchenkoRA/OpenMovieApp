import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import config from './config';
import movies from './movies';

const logger = createLogger();

const store = createStore(
  combineReducers({
    config,
    movies,
  }),
  applyMiddleware(logger),
);

export default store;
