import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const MovieDetailComponent = React.memo(({movieData}) => {
  const renderRowsWithAdDetail = key => {
    if (
      [
        'Poster',
        'Ratings',
        'Plot',
        'Title',
        'imdbID',
        'Type',
        'Response',
      ].includes(key)
    ) {
      return null;
    }
    const value = movieData[key];
    return (
      <View style={styles.detailItemRow} key={key}>
        <Text style={styles.titleText}>{`${key}: `}</Text>
        <Text style={styles.detailItemTextStyle} numberOfLines={10}>
          {value === 'N/A' ? '-' : value}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {Object.keys(movieData).map(key => renderRowsWithAdDetail(key))}
    </View>
  );
});

export default MovieDetailComponent;
