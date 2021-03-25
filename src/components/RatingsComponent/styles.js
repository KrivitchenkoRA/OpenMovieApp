import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

export default StyleSheet.create({
  ratingRow: {
    paddingLeft: 5,
    paddingVertical: 5,
  },
  titleTextStyle: {
    marginBottom: 10,
    color: colors.blackColor,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 5,
  },
  extrasTextStyle: {
    color: colors.blackColor,
    fontSize: 14,
  },
});
