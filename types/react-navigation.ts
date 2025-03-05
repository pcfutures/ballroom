import { AppTheme } from '../src/theme/interfaces';

declare module '@react-navigation/native' {
  export function useTheme(): AppTheme;
}
