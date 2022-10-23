import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.contianer, {width: width}]}>
      <View style={styles.iconContainer}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
      </View>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.light,
  },
  icon: {
    marginRight: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppTextInput;
