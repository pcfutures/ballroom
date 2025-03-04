import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppButton } from '../src/components/ui';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AppButton>Hello</AppButton>
    </View>
  );
}
