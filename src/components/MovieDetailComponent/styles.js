import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

export default StyleSheet.create({
  detailItemRow: {
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blackColor,
    width: 100,
  },
  detailItemTextStyle: {
    color: colors.blackColor,
    fontSize: 15,
    flex: 1,
  },
});
