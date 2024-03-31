import {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import EmojiPicker, {EmojiType} from 'rn-emoji-keyboard';
import StatusBox from '../StatusBox';

interface AddUpdateModalProps {
  modalVisible: boolean;
  onClose: () => void;
  onSaveStatus: (status: any) => void;
}

const AddUpdateModal: React.FC<AddUpdateModalProps> = ({
  modalVisible,
  onClose,
  onSaveStatus,
}) => {
  const {styles} = useStyles(stylesheet);
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelectEmoji = (emojiObject: EmojiType) => {
    setEmoji(emojiObject.emoji);
  };

  const onSavePressed = () => {
    onSaveStatus({message, mood, emoji});
    setMessage('');
    setMood('');
    setEmoji('');
    onClose();
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          onClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <StatusBox
              editable={true}
              message={message}
              mood={mood}
              emoji={emoji}
              setMessage={setMessage}
              setMood={setMood}
            />
            <View style={styles.modalBottom}>
              <Pressable onPress={onSavePressed} style={styles.button}>
                <Text style={styles.buttonText}>POST</Text>
              </Pressable>
              <Pressable
                onPress={() => setIsOpen(true)}
                style={styles.emojiPickerContainer}>
                <Text style={styles.emojiPicker}>
                  😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰
                </Text>
              </Pressable>
              <Pressable onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>CLOSE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <EmojiPicker
        onEmojiSelected={onSelectEmoji}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        categoryPosition="bottom"
        enableSearchBar
      />
    </>
  );
};

export default AddUpdateModal;

const stylesheet = createStyleSheet(theme => ({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000088',
  },
  modalView: {
    width: '95%',
    padding: 10,
    backgroundColor: `${theme.colors.victoriusPurple}80`,
    borderRadius: 10,
  },
  modalBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: theme.colors.red01,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.victoriusPurple,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  emojiPickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  emojiPicker: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
}));
