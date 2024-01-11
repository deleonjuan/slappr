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
      <View style={styles.headerRightItem}>
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
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginRight: {
      portrait: 10,
      landscape: 0,
    },
    marginTop: {
      portrait: 10,
      landscape: 0,
    },
    flex: {
      portrait: 0,
      landscape: 1,
    },
  },
  headerRightItem: {
    flex: {
      portrait: 1,
      landscape: 2,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: {
      portrait: 'center',
      landscape: 'flex-end',
    },
  },

  photoContainer: {
    backgroundColor: theme.colors.red01,
    flexDirection: {
      portrait: 'row',
      landscape: 'column-reverse',
    },
    borderWidth: 5,
    borderBottomWidth: 0,
    borderRightWidth: {
      portrait: 5,
      landscape: 0,
    },
    borderBottomLeftRadius: {
      portrait: 0,
      landscape: 10,
    },
    borderTopRightRadius: {
      portrait: 10,
      landscape: 0,
    },
    borderBottomRightRadius: 0,
    borderColor: theme.colors.red01,
    borderRadius: 10,
  },

  photoBox: {
    aspectRatio: '1/1',
    height: {
      portrait: UnistylesRuntime.screen.width / 3.5,
      landscape: UnistylesRuntime.screen.width / 5,
    },
    display: 'flex',
  },
  verticalTextContainer: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    color: theme.colors.yellow01,
    fontWeight: 'bold',
    position: 'absolute',
    transform: [
      {
        rotate: {
          portrait: '-90deg',
          landscape: '0deg',
        },
      },
    ],
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
    transform: [
      {
        rotate: {
          portrait: '0deg',
          landscape: '-90deg',
        },
      },
    ],
    width: {
      portrait: UnistylesRuntime.screen.width / 2.5,
      landscape: UnistylesRuntime.screen.width / 4,
    },
    height: {
      portrait: 80,
      landscape: 100,
    },
  },
}));

export default Header;
