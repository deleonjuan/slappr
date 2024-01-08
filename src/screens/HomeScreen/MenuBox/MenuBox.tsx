import {View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import MenuItem from './MenuItem';

const MenuBox = () => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MenuItem text="my profile" />
        <MenuItem text="add update" />
        <MenuItem text="people search" />
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
