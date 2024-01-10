import {Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useSelector} from 'react-redux';

const StatusBox = () => {
  const {styles} = useStyles(stylesheet);
  const {userInfo} = useSelector((state: any) => state.authReducer);
  return (
    <View style={styles.statusBoxContainer}>
      <View style={styles.messageContainer}>
        <Text
          style={[styles.textBig, styles.name]}>{`${userInfo.username}:`}</Text>
        <Text style={[styles.textNormal, styles.message]}>lorem Ipsum</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.textNormal, styles.moodLabel]}>MOOD=</Text>
        <Text style={[styles.textBig, styles.mood, {marginLeft: 5}]}>
          Happy
        </Text>
      </View>
    </View>
  );
};

export default StatusBox;

const stylesheet = createStyleSheet(theme => ({
  statusBoxContainer: {
    backgroundColor: theme.colors.red01,
    padding: 5,
    borderRadius: 10,
  },
  messageContainer: {
    backgroundColor: theme.colors.skyBlue01,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 200,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusContainer: {
    backgroundColor: theme.colors.skyBlue02,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textBig: {fontWeight: 'bold', fontSize: 30},
  textNormal: {fontWeight: 'bold', fontSize: 20},
  name: {color: theme.colors.victoriusBlue},
  message: {color: 'black'},
  moodLabel: {color: theme.colors.red01},
  mood: {color: theme.colors.victoriusPurple},
}));
