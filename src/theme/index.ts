import { ColorSchemeName } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '@react-navigation/native/src/theming/fonts';

import { AppTheme } from './interfaces';

const sizes = {
  paddingVertical: moderateScale(16),
  paddingHorizontal: moderateScale(16),
  mainBorderRadius: moderateScale(16),
  largeHeight: moderateScale(56),
  mediumHeight: moderateScale(44),
  smallHeight: moderateScale(32),
};

const light: AppTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
  sizes,
  fonts,
};

const dark: AppTheme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
  sizes,
  fonts,
};

export const iconSet = {};

export function colorSet(colorScheme: ColorSchemeName) {
  switch (colorScheme) {
    case 'light': {
      return light;
    }
    case 'dark': {
      return dark;
    }
    default: {
      return light;
    }
  }
}
