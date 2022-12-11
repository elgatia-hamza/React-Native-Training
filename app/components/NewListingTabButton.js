import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function NewListingTabButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
});

export default NewListingTabButton;
