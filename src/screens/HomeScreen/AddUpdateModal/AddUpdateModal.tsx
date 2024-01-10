import {View, Text, Modal, Pressable} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import StatusBox from '../StatusBox';

interface AddUpdateModalProps {
  modalVisible: boolean;
  onClose: () => void;
}

const AddUpdateModal: React.FC<AddUpdateModalProps> = ({
  modalVisible,
  onClose,
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <StatusBox />
          <View style={styles.modalBottom}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>POST</Text>
            </Pressable>
            <Pressable onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: theme.colors.red01,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.victoriusPurple
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
}));
