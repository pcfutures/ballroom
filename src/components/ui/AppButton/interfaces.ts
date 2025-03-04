import {
  StyleProp,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

import { ComponentSize } from '../../../hooks/useGetComponentSize';

export interface AppButtonProps extends TouchableWithoutFeedbackProps {
  textStyle?: StyleProp<TextStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
  skin?: AppButtonSkins;
  size?: ComponentSize;
}

export type AppButtonSkins = 'brand' | 'grey';
