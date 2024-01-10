import {Text, View, TextInput} from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {useSelector} from 'react-redux';

interface StatusBoxProps {
  editable: boolean;
  setMessage?: any;
  setMood?: any;
  message?: string;
  mood?: string;
  isLoading?: boolean;
}

const StatusBox: React.FC<StatusBoxProps> = ({
  setMessage,
  setMood,
  message,
  mood,
  editable,
  isLoading
}) => {
  const {styles} = useStyles(stylesheet);
  const {userInfo} = useSelector((state: any) => state.authReducer);

  return (
    <View style={styles.statusBoxContainer}>
      <View style={styles.messageContainer}>
        {
          isLoading && <Text style={{color: 'red'}}>Loading</Text>
        }
        <Text
          style={[styles.textBig, styles.name]}>{`${userInfo.username}:`}</Text>
        <TextInput
          editable={editable}
          onChangeText={setMessage}
          placeholder={
            !editable && !message
              ? "tap 'ADD UPDATE' to add a new update"
              : 'your thoghts here!'
          }
          placeholderTextColor={'black'}
          style={[styles.textNormal, styles.message]}
          value={message}
          cursorColor="black"
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.textNormal, styles.moodLabel]}>MOOD=</Text>
        <TextInput
          editable={editable}
          onChangeText={setMood}
          style={[styles.textBig, styles.mood, {marginLeft: 5}]}
          value={mood}
          placeholderTextColor={styles.mood.color}
          cursorColor="black"
        />
      </View>
    </View>
  );
};

StatusBox.defaultProps = {
  editable: false,
  setMessage: () => {},
  setMood: () => {},
  message: '',
  mood: '',
  isLoading: false,
};

export default StatusBox;

const stylesheet = createStyleSheet(theme => ({
  statusBoxContainer: {
    borderRadius: 10,
    height: UnistylesRuntime.screen.width / 1.5,
    borderWidth: 5,
    borderBottomWidth: 7,
    borderColor: theme.colors.red01,
  },
  messageContainer: {
    backgroundColor: theme.colors.skyBlue01,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
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
  message: {color: 'black', height: '100%', verticalAlign: 'top'},
  moodLabel: {color: theme.colors.red01},
  mood: {color: theme.colors.victoriusPurple, flex: 1, padding: 0},
}));
