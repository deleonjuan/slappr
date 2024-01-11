import {View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import MenuItem from './MenuItem';
import {CONSTS} from '@utils/constants';

interface MenuBoxProps {
  triggerModal: () => void;
}

const MenuBox: React.FC<MenuBoxProps> = ({triggerModal}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MenuItem text={CONSTS.MENU_BOX.ADD_UPDATE} onPress={triggerModal} />
        <MenuItem text={CONSTS.MENU_BOX.MY_PROFILE} />
        <MenuItem text={CONSTS.MENU_BOX.COMMENTS} />
        <MenuItem text={CONSTS.MENU_BOX.SEARCH} />
      </View>
    </View>
  );
};

export default MenuBox;

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: `${theme.colors.victoriusBlue}88`,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  box: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.red01,
    paddingTop: 10,
  },
}));
