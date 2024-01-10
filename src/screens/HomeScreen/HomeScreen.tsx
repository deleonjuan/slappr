import Header from './Header';
import StatusBox from './StatusBox';
import MenuBox from './MenuBox';
import BackgroundContainer from '@components/Layout/BackgroundContainer';
import {useState} from 'react';
import AddUpdateModal from './AddUpdateModal';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {statusActions} from '@store/slices/status';

const HomeScreen = () => {
  const dispatch = useDispatch();
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

  return (
    <BackgroundContainer>
      <Header />
      <View style={{marginHorizontal: 10}}>
        <StatusBox
          editable={false}
          isLoading={isLoading}
          message={lastStatus.message}
          mood={lastStatus.mood}
        />
      </View>
      <MenuBox triggerModal={triggerModal} />

      <AddUpdateModal
        onSaveStatus={onSaveStatus}
        modalVisible={modalVisible}
        onClose={triggerModal}
      />
    </BackgroundContainer>
  );
};

export default HomeScreen;
