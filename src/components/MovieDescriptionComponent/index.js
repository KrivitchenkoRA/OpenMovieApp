import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const MovieDescriptionComponent = React.memo(({description}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTextStyle}>Description:</Text>
      <Text style={styles.descriptionTextStyle}>{description}</Text>
    </View>
  );
});

export default MovieDescriptionComponent;
