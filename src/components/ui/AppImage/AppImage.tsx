import { Image, ImageProps } from 'expo-image';
import { FC } from 'react';

const AppImage: FC<ImageProps> = (props) => {
  return (
    <Image
      contentFit="cover"
      transition={100}
      {...props}
    />
  );
};

export default AppImage;
