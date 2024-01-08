import BackgroundContainer from '@components/Layout/BackgroundContainer';
import {IMAGES} from '@project/images';
import {Button, Image} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

const LoginScreen = () => {
  const {styles} = useStyles(stylesheet);

  return (
    <BackgroundContainer
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={IMAGES.logo01} style={styles.logo} />

      <Button title="enter" onPress={() => {}} />
    </BackgroundContainer>
  );
};

export default LoginScreen;

const stylesheet = createStyleSheet(theme => ({
  logo: {
    resizeMode: 'stretch',
    width: UnistylesRuntime.screen.width / 1.5,
    height: 120,
    marginBottom: 50,
  },
}));
