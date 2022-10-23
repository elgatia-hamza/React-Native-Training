import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({name, size = 40, backgroundColor = '#000', color = '#fff'}) => {
  const styles = useMemo(
    () => getStyles(size, backgroundColor),
    [size, backgroundColor],
  );
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  );
};

const getStyles = (size, backgroundColor) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Icon;
