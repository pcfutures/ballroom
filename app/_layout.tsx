import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { ThemeProvider } from '@react-navigation/core';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Drawer } from 'expo-router/drawer';

import { AppInitializationProvider } from '../src/providers/AppInitializationProvider/AppInitializationProvider';
import { appPersister, queryClient } from '../src/store/services';
import { colorSet } from '../src/theme';

export default function Layout() {
  const activeColorScheme = colorSet('light');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PersistQueryClientProvider
          client={queryClient ?? new QueryClient()}
          persistOptions={{ persister: appPersister }}
        >
          <ThemeProvider value={activeColorScheme}>
            <AppInitializationProvider>
              <Drawer>
                <Drawer.Screen
                  name="index"
                  options={{
                    drawerLabel: 'Home',
                    title: 'overview',
                  }}
                />
                <Drawer.Screen
                  name="user/[id]"
                  options={{
                    drawerLabel: 'User',
                    title: 'overview',
                  }}
                />
              </Drawer>
            </AppInitializationProvider>
          </ThemeProvider>
        </PersistQueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
