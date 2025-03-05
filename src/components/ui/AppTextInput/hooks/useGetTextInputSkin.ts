import { useMemo } from 'react';

import { useAppTheme } from '../../../../hooks/useAppTheme';
import { AppInputSkins } from '../interfaces';

export const useGetTextInputSkin = (skin?: AppInputSkins) => {
  const theme = useAppTheme();
  return useMemo(() => {
    switch (skin) {
      default: {
        return theme.colors.card;
      }
    }
  }, [skin, theme.colors.card]);
};
