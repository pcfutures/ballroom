import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppButton, AppImage } from '../src/components/ui';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AppButton>Hello</AppButton>
      <AppImage style={{ width: 200, height: 200 }} />
    </View>
  );
}
