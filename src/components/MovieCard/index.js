import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

const MovieCard = ({movieData, onCellPress, index}) => {
  const posterUrl = movieData.Poster;

  return (
    <TouchableOpacity onPress={() => onCellPress(movieData)}>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: posterUrl !== 'N/A' ? posterUrl : null,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.imageCoverView}>
              <View style={styles.nameMovieTextContainer}>
                <Text style={styles.nameMovieTextStyle}>
                  {movieData?.Title}
                </Text>
              </View>
              <View style={styles.movieDataContainer}>
                <Text style={styles.movieDataTextStyle}>{movieData?.Year}</Text>
              </View>
            </View>
          </FastImage>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
