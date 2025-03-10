import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const drawerHeaderStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.sizes.paddingHorizontal,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: moderateScale(40),
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: moderateScale(8),
    },
    avatar: {
      borderRadius: moderateScale(24),
      overflow: 'hidden',
      width: moderateScale(24),
      height: moderateScale(24),
    },
    pointsContainer: {
      backgroundColor: 'green',
      borderRadius: moderateScale(24),
      overflow: 'hidden',
      minWidth: moderateScale(24),
      height: moderateScale(24),
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: moderateScale(3),
    },
    pointsText: {
      color: 'white',
      fontSize: moderateScale(16),
    },
  });
