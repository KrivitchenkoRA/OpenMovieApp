import {Dimensions, Platform} from 'react-native';

export const isIphoneXorAbove = () => {
  const {width, height} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height >= 812 || width >= 812)
  );
};
