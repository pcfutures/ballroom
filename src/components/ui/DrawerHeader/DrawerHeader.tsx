import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../AppText/AppText';
import { Pressable, View } from 'react-native';
import AppImage from '../AppImage/AppImage';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { drawerHeaderStyles } from './styles';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/routers';

const DrawerHeader = () => {
  const { styles } = useThemedStyles(drawerHeaderStyles);
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <Pressable onPress={handleOpenDrawer}>
          <AppText>
            Icon
          </AppText>
        </Pressable>
        <View style={styles.rightContent}>
          <AppText>
            John Smith
          </AppText>
          <AppImage
            style={styles.avatar}
            source={{ uri: 'https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png' }} />
          <View style={styles.pointsContainer}>
            <AppText style={styles.pointsText}>
              3
            </AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;
