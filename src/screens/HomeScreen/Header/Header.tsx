import {IMAGES} from '@project/images';
import {Image, Text, View} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {useSelector} from 'react-redux';

const Header = () => {
  const {styles} = useStyles(stylesheet);
  const {userInfo} = useSelector((state: any) => state.authReducer);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={IMAGES.logo01} style={styles.logo} />
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.verticalTextContainer}>
          <Text style={styles.verticalText}>UPDATE</Text>
        </View>
        <View style={styles.photoBox}>
          <Image
            source={{uri: userInfo.photo}}
            style={{flex: 1, borderRadius: 5, backgroundColor: 'green'}}
          />
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  photoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoBox: {
    aspectRatio: '1/1',
    height: UnistylesRuntime.screen.width / 3.5,
    backgroundColor: theme.colors.red01,
    borderWidth: 5,
    borderColor: theme.colors.red01,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 10,
    display: 'flex',
  },
  verticalTextContainer: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red01,
    borderTopLeftRadius: 10,
  },
  verticalText: {
    color: theme.colors.yellow01,
    fontWeight: 'bold',
    position: 'absolute',
    transform: [{rotate: '-90deg'}],
    fontSize: 20,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    resizeMode: 'stretch',
    width: UnistylesRuntime.screen.width / 2.5,
    height: 80,
  },
}));

export default Header;
