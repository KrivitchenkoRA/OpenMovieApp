import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const AppHeader = React.memo(({title, isShowBackButton, backButtonPress}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        isShowBackButton && styles.rightPaddingValue,
      ]}>
      {isShowBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={backButtonPress}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );
});

export default AppHeader;
