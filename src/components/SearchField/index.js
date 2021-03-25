import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../constants/colors';

import styles from './styles';

const SearchField = React.memo(
  ({value, placeholder, onChange, customStyle, onClearButtonPress}) => {
    return (
      <View style={[styles.container, customStyle && customStyle]}>
        <Icon name={'search'} size={25} color={colors.SEARCH_ICON_COLOR} />
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholderTextColor}
          value={value}
          onChangeText={onChange}
        />
        {value.length > 0 && (
          <TouchableOpacity
            style={styles.clearButtonStyle}
            onPress={onClearButtonPress}>
            <Icon name={'clear'} size={15} color={colors.whiteColor} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default SearchField;
