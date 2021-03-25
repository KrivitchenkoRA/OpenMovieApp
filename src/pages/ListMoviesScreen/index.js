import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppHeader, MovieCard, SearchField} from '../../components';

import {getMoviesBySearchValueFromServer} from '../../utils/apiRequests';

import {useDebounce} from '../../services/useDebounceHook';

import * as moviesReducer from '../../redux/movies';

import styles from './styles';

const ListMoviesScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const {listMovies} = useSelector(({movies}) => ({
    listMovies: movies.listMovies,
  }));

  useEffect(() => {
    if (debouncedSearchTerm) {
      getMoviesBySearchValueFromServer(searchValue);
    }
  }, [debouncedSearchTerm, searchValue]);

  const getSearchValue = text => {
    setSearchValue(text);
  };

  const clearSearchField = () => {
    setSearchValue('');
    dispatch(moviesReducer.listMoviessClean());
  };

  const onCellPress = data => navigation.navigate('MovieDetailScreen', data);

  return (
    <View style={styles.container}>
      <AppHeader title="Movies App" />
      <SearchField
        value={searchValue}
        placeholder="Search for a movie"
        onChange={getSearchValue}
        onClearButtonPress={clearSearchField}
      />
      <FlatList
        keyExtractor={(item, index) => `key-${index}`}
        renderItem={({item, index}) => {
          return <MovieCard movieData={item} onCellPress={onCellPress} />;
        }}
        data={listMovies}
        scrollEnabled
        initialNumToRender={10}
      />
    </View>
  );
};

export default ListMoviesScreen;
