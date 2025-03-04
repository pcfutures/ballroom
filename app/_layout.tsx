import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@react-navigation/core';
import { Drawer } from 'expo-router/drawer';

import { colorSet } from '../src/theme';

export default function Layout() {
  const activeColorScheme = colorSet('light');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={activeColorScheme}>
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
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
