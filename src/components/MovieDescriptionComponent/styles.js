import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {colors} from '../../constants';

export default StyleSheet.create({
  mainContainer: {
    width,
    paddingLeft: 5,
    paddingTop: 15,
  },
  titleTextStyle: {
    marginBottom: 10,
    color: colors.blackColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionTextStyle: {
    color: colors.blackColor,
    fontSize: 14,
  },
});
