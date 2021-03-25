import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {isIphoneXorAbove} from '../../utils/checkIphoneX';
import {colors} from '../../constants';

export default StyleSheet.create({
  mainContainer: {
    width,
    height: isIphoneXorAbove() ? 115 : 95,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  rightPaddingValue: {
    paddingRight: 50,
  },
  titleTextStyle: {
    flex: 1,
    paddingLeft: 15,
    color: colors.blackColor,
    fontSize: 30,
    fontWeight: '600',
  },
  backButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
});
