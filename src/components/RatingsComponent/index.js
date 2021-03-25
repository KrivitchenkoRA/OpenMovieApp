import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const RatingsComponent = React.memo(({ratings = []}) => {
  return (
    <View>
      <Text style={styles.titleTextStyle}>Ratings:</Text>
      {ratings.map((data, index) => {
        return (
          <View key={`${data.name}-${index}`} style={styles.ratingRow}>
            <Text>{`- ${data.Source}`}</Text>
          </View>
        );
      })}
    </View>
  );
});

export default RatingsComponent;
