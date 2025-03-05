import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const errorTextStyles = (theme: AppTheme) =>
  StyleSheet.create({
    caption: {
      fontSize: moderateScale(12),
      marginTop: moderateScale(6),
    },
    error: {
      color: 'red',
    },
    grey: {
      color: 'grey',
    },
  });
