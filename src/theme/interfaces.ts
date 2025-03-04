import { ColorValue } from 'react-native';
import type { Theme } from '@react-navigation/native/src/types';

type Color = ColorValue & string;

export interface AppTheme {
  dark: boolean;
  colors: {
    primary: Color;
    background: Color;
    card: Color;
    text: Color;
    border: Color;
    notification: Color;
  };
  sizes: {
    paddingHorizontal: number;
    paddingVertical: number;
    mainBorderRadius: number;
    largeHeight: number;
    mediumHeight: number;
    smallHeight: number;
  };
  fonts: Theme['fonts'];
}
