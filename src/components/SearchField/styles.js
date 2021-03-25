import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.serachFieldBcgColor,
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 40,
  },
  inputStyle: {
    backgroundColor: colors.serachFieldBcgColor,
    fontSize: 16,
    borderRadius: 10,
    flex: 1,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  clearButtonStyle: {
    backgroundColor: colors.grayColor,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    color: colors.whiteColor,
  },
});
