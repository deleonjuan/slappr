import Header from './Header';
import StatusBox from './StatusBox';
import MenuBox from './MenuBox';
import BackgroundContainer from '@components/Layout/BackgroundContainer';
import {useState} from 'react';
import AddUpdateModal from './AddUpdateModal';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {statusActions} from '@store/slices/status';
import BottomTabNav from '@components/Layout/BottomTabNav';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {ScrollView} from 'react-native-gesture-handler';
import {authActions} from '@store/slices/auth';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {styles} = useStyles(stylesheet);
  const {lastStatus, isLoading} = useSelector(
    (state: any) => state.statusReducer,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const triggerModal = () => {
    setModalVisible(isVisible => !isVisible);
  };

  const onSaveStatus = (newStatus: any) => {
    dispatch(statusActions.setIsLoading(true));
    dispatch(statusActions.setLastStatus(newStatus));

    setTimeout(() => {
      dispatch(statusActions.setIsLoading(false));
    }, 1000);
  };

  const onExit = () => {
    dispatch(authActions.setUserInfo({photo: null, username: null}));
    dispatch(authActions.setToken(null));
  };

  return (
    <BackgroundContainer>
      <BottomTabNav>
        <View style={styles.container}>
          <Header />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.statusBoxContainer}>
              <StatusBox
                editable={false}
                isLoading={isLoading}
                message={lastStatus.message}
                mood={lastStatus.mood}
                emoji={lastStatus.emoji}
              />
            </View>
            <MenuBox triggerModal={triggerModal} onExit={onExit} />
          </ScrollView>
        </View>

        <AddUpdateModal
          onSaveStatus={onSaveStatus}
          modalVisible={modalVisible}
          onClose={triggerModal}
        />
      </BottomTabNav>
    </BackgroundContainer>
  );
};

export default HomeScreen;

const stylesheet = createStyleSheet(() => ({
  container: {
    display: 'flex',
    flexDirection: {
      portrait: 'column',
      landscape: 'row',
    },
    paddingRight: {
      portrait: 0,
      landscape: 10,
    },
  },
  statusBoxContainer: {
    marginHorizontal: {
      portrait: 10,
      landscape: 0,
    },
    marginVertical: {
      portrait: 0,
      landscape: 20,
    },
  },
}));
