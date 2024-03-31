import CustomBottomTabBar from '@components/CustomButtomTabBar';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const descriptors = {
  'camera-e-OvkNPyjzmFWhDtoBFJy': {
    options: {
      headerShown: false,
    },
    route: {
      key: 'camera-e-OvkNPyjzmFWhDtoBFJy',
      name: 'camera',
      params: undefined,
    },
  },
  'friends-hRh_Rw1cDzYCk0e2U8KK7': {
    options: {
      headerShown: false,
    },
    route: {
      key: 'friends-hRh_Rw1cDzYCk0e2U8KK7',
      name: 'friends',
      params: undefined,
    },
  },
  'home-NQhCY8liqQsZSvWD9dRoU': {
    options: {
      headerShown: false,
    },
    route: {
      key: 'home-NQhCY8liqQsZSvWD9dRoU',
      name: 'home',
      params: undefined,
    },
  },
  'mail-pLP1P0OGC8XhXmU2zUmih': {
    options: {
      headerShown: false,
    },
    route: {
      key: 'mail-pLP1P0OGC8XhXmU2zUmih',
      name: 'mail',
      params: undefined,
    },
  },
};

const state = {
  index: 0,
  routes: [
    {
      key: 'home-NQhCY8liqQsZSvWD9dRoU',
      name: 'home',
      params: undefined,
    },
    {
      key: 'mail-pLP1P0OGC8XhXmU2zUmih',
      name: 'mail',
      params: undefined,
    },
    {
      key: 'camera-e-OvkNPyjzmFWhDtoBFJy',
      name: 'camera',
      params: undefined,
    },
    {
      key: 'friends-hRh_Rw1cDzYCk0e2U8KK7',
      name: 'friends',
      params: undefined,
    },
  ],
};
const BottomTabNav = ({children}: any) => {
  const navigation = useNavigation();
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.conatiner}>
      <View style={{flex: 1}}>{children}</View>
      <CustomBottomTabBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
        style={styles.bottomTabNav}
      />
    </View>
  );
};

export default BottomTabNav;

const stylesheet = createStyleSheet(() => ({
  conatiner: {
    flex: 1,
    display: 'flex',
    flexDirection: {
      portrait: 'column',
      landscape: 'row',
    },
  },
  bottomTabNav: {
    flexDirection: {
      portrait: 'row',
      landscape: 'column-reverse',
    },
    paddingVertical: {
      portrait: 10,
      landscape: 0,
    },
    paddingHorizontal: {
      portrait: 0,
      landscape: 10,
    },
  },
}));
