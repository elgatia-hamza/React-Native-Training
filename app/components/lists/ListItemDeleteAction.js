import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <Icon name="trash-can" color={colors.white} size={25} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
