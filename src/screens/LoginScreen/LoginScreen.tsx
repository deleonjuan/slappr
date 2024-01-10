import BackgroundContainer from '@components/Layout/BackgroundContainer';
import {IMAGES} from '@project/images';
import {Alert, Image, Pressable, Text, TextInput} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {setToken, updateUserInfo} from '@store/slices/auth';
import {useState} from 'react';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {styles} = useStyles(stylesheet);

  const [photo, setPhoto] = useState('');
  const [username, setUsername] = useState('');

  const onSetImage = () => {
    ImagePicker.openPicker({
      compressImageQuality: 0.8,
      hideBottomControls: true,
      mediaType: 'photo',
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setPhoto(image.path);
      })
      .catch(e => {
        Alert.alert(e);
      });
  };

  const onLogin = async () => {
    if (!photo || !username) {
      Alert.alert('info incompleta');
      return;
    }

    dispatch(updateUserInfo({photo, username}));
    dispatch(setToken('access-token'));
  };

  return (
    <BackgroundContainer
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={IMAGES.logo01} style={styles.logo} />

      <Pressable
        onPress={onSetImage}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Image source={{uri: photo}} style={styles.imageFrame} />
        <Text style={styles.photoMessage}>Sube tu foto</Text>
      </Pressable>

      <TextInput
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Tu nombre"
      />

      <Pressable onPress={onLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </BackgroundContainer>
  );
};

export default LoginScreen;

const stylesheet = createStyleSheet(theme => ({
  logo: {
    resizeMode: 'stretch',
    width: UnistylesRuntime.screen.width / 1.5,
    height: 120,
    marginBottom: 30,
  },
  imageFrame: {
    height: 150,
    aspectRatio: 1 / 1,
    backgroundColor: theme.colors.victoriusPurple,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: theme.colors.red01,
  },
  photoMessage: {
    fontSize: 30,
    transform: [{rotate: '-45deg'}],
    fontWeight: 'bold',
    color: theme.colors.yellow01,
  },
  textInput: {
    width: '72%',
    backgroundColor: theme.colors.victoriusPurple,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: theme.colors.red01,
    paddingHorizontal: 15,

    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.yellow01,
    marginBottom: 30,
  },
  button: {
    backgroundColor: theme.colors.victoriusBlue,
    width: '72%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,

    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.red01,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.skyBlue02,
  },
}));
