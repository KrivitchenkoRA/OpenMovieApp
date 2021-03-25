import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {colors} from '../../constants';

export default StyleSheet.create({
  mainContainer: {
    width,
    height: width - 30,
    paddingHorizontal: 15,
    paddingVertical: 7.5,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 18,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 18,
  },
  imageCoverView: {
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 18,
    backgroundColor: colors.opacityBlackColor,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nameMovieTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameMovieTextStyle: {
    color: colors.whiteColor,
    fontSize: 25,
    fontWeight: 'bold',
  },
  movieDataContainer: {
    paddingBottom: 5,
    paddingLeft: 15,
    color: colors.whiteColor,
  },
  movieDataTextStyle: {
    color: colors.whiteColor,
    fontSize: 18,
  },
});
