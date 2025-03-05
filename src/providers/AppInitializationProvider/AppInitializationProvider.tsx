import React, { createContext, useContext } from 'react';

import useInitializeApp from './hooks/initializeApp';

interface AppInitializationContextType {
  isAppReady: boolean;
}

const AppInitializationContext = createContext<AppInitializationContextType>({
  isAppReady: false,
});

export const useAppInitialization = () => {
  return useContext(AppInitializationContext);
};

export const AppInitializationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isAppReady } = useInitializeApp();

  return (
    <AppInitializationContext.Provider
      value={{
        isAppReady,
      }}
    >
      {children}
    </AppInitializationContext.Provider>
  );
};
