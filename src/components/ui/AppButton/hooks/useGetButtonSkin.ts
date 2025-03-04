import { useMemo } from 'react';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { AppButtonSkins } from '../interfaces';

export const useGetButtonSkin = (skin?: AppButtonSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      case 'brand': {
        return theme.colors.primary;
      }
      default: {
        return theme.colors.primary;
      }
    }
  }, [skin, theme.colors.primary]);
};

export const useGetButtonTextSkin = (skin?: AppButtonSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      case 'brand': {
        return theme.colors.text;
      }
      default: {
        return theme.colors.text;
      }
    }
  }, [skin, theme.colors.text]);
};
