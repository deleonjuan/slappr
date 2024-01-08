import {Pressable, Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface MenuItemProps {
  icon?: any; // TODO: replace
  text: string;
  onPress?: () => void;
  arrowColor?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  onPress,
  arrowColor,
}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.menuItemContainer}>
        <View style={styles.menuItemLeftItems}>
          {/* <Text>{':)'}</Text> */}
          <Text style={styles.menuItemText}>{text}</Text>
        </View>
        <Text>{">"}</Text>
      </View>
    </Pressable>
  );
};

MenuItem.defaultProps = {
  icon: null,
  text: '',
  onPress: () => null,
  arrowColor: '',
};

export default MenuItem;

const stylesheet = createStyleSheet(theme => ({
  menuItemContainer: {
    marginBottom: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: `${theme.colors.victoriusBlue}AA`,
    borderRadius: 10,
  },
  menuItemLeftItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 5,
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 20,
  },
}));
