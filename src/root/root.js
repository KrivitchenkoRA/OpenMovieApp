import * as React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import MainStack from '../navigation/MainStack';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './styles';

const RootContainer = () => {
  const {isLoading} = useSelector(({config}) => ({
    isLoading: config.isLoading,
  }));

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <MainStack />
    </View>
  );
};

export default RootContainer;
