import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {isIphoneXorAbove} from '../../utils/checkIphoneX';

import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: isIphoneXorAbove() ? 30 : 5,
  },
  mainPhotoStyle: {
    width,
    height: width,
  },
  imageCoverView: {
    flex: 1,
    backgroundColor: colors.opacityBlackColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
