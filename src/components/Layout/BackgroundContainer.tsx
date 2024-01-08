import {ImageBackground, View, ViewStyle} from 'react-native';
import {IMAGES} from '@project/images';

interface BackgroundContainerProps {
  children?: React.JSX.Element | React.JSX.Element[];
  style?: ViewStyle;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  style,
}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.background1}
        resizeMode="cover"
        style={[{flex: 1}, style]}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundContainer;

BackgroundContainer.defaultProps = {
  children: <></>,
  style: {},
};
