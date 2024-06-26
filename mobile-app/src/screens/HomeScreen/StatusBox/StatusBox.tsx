import {IMAGES} from '@project/images';
import {CONSTS} from '@utils/constants';
import {Text, View, TextInput, Image} from 'react-native';
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
  emoji?: string;
  isLoading?: boolean;
}

const StatusBox: React.FC<StatusBoxProps> = ({
  setMessage,
  setMood,
  message,
  mood,
  emoji,
  editable,
  isLoading,
}) => {
  const {styles} = useStyles(stylesheet);
  const {userInfo} = useSelector((state: any) => state.authReducer);

  return (
    <View style={styles.statusBoxContainer}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBox}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                marginRight: 10,
              }}>
              {CONSTS.STATUS_BOX.UPDATING}
            </Text>
            <Image source={IMAGES.spinner} />
          </View>
        </View>
      )}

      <View style={styles.messageContainer}>
        <Text
          style={[styles.textBig, styles.name]}>{`${userInfo.username}:`}</Text>
        <TextInput
          autoFocus
          multiline
          editable={editable}
          onChangeText={setMessage}
          placeholder={
            isLoading
              ? CONSTS.EMPTY
              : !editable && !message
              ? CONSTS.STATUS_BOX.TAP_TO_UPDATE
              : CONSTS.STATUS_BOX.MESSAGE_PLACEHOLDER
          }
          placeholderTextColor={'black'}
          style={[styles.textNormal, styles.message]}
          value={!isLoading ? message : ''}
          cursorColor="black"
          maxLength={120}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.textNormal, styles.moodLabel]}>
          {CONSTS.STATUS_BOX.MOOD}=
        </Text>
        <TextInput
          editable={editable}
          onChangeText={setMood}
          style={[styles.textBig, styles.mood, {marginLeft: 5}]}
          value={!isLoading ? mood : ''}
          placeholderTextColor={styles.mood.color}
          cursorColor="black"
          maxLength={15}
        />
        <View
          style={{
            position: 'absolute',
            right: 15,
            top: -30,
          }}>
          <Text style={{color: 'white', fontSize: 50}}>
            {!isLoading ? emoji : ''}
          </Text>
        </View>
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
    height: {
      portrait: UnistylesRuntime.screen.width / 1.5,
      landscape: UnistylesRuntime.screen.width / 2.5,
    },
    borderWidth: 5,
    borderBottomWidth: 7,
    borderColor: theme.colors.red01,
    display: 'flex',
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
  loadingContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox: {
    backgroundColor: '#777',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.red01,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
