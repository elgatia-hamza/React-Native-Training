import {Platform} from 'react-native';

import colors from './colors';

export default {
  colors,
  text: {
    color: colors.dark,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    padding: Platform.OS === 'android' ? 0 : undefined,
  },
};
