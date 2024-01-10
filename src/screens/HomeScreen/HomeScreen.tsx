import Header from './Header';
import StatusBox from './StatusBox';
import MenuBox from './MenuBox';
import BackgroundContainer from '@components/Layout/BackgroundContainer';
import {useState} from 'react';
import AddUpdateModal from './AddUpdateModal';
import {View} from 'react-native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const triggerModal = () => {
    setModalVisible(isVisible => !isVisible);
  };

  return (
    <BackgroundContainer>
      <Header />
      <View style={{marginHorizontal: 10}}>
        <StatusBox />
      </View>
      <MenuBox triggerModal={triggerModal} />

      <AddUpdateModal modalVisible={modalVisible} onClose={triggerModal} />
    </BackgroundContainer>
  );
};

export default HomeScreen;
