import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {
  AppHeader,
  RatingsComponent,
  MovieDetailComponent,
  MovieDescriptionComponent,
} from '../../components';

import {getMovieByIdFromServer} from '../../utils/apiRequests';

import * as moviesReducer from '../../redux/movies';

import styles from './styles';

const MovieDetailScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const movieData = props.route.params;

  useEffect(() => {
    getMovieByIdFromServer(movieData.imdbID);
  }, [movieData.imdbID]);

  const {selectedMovieData} = useSelector(({movies}) => ({
    selectedMovieData: movies.selectedMovieData,
  }));

  const backButtonPress = () => {
    dispatch(moviesReducer.listMoviesCleanSelectedMovieData());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title={selectedMovieData?.Title}
        isShowBackButton
        backButtonPress={backButtonPress}
      />
      <ScrollView>
        <FastImage
          style={styles.mainPhotoStyle}
          source={{
            uri:
              selectedMovieData.Poster !== 'N/A'
                ? selectedMovieData.Poster
                : null,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <MovieDetailComponent movieData={selectedMovieData} />
        <RatingsComponent ratings={selectedMovieData?.Ratings} />
        <MovieDescriptionComponent description={selectedMovieData?.Plot} />
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;
