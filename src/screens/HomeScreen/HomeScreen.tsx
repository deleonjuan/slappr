import {ImageBackground, View} from 'react-native';
import {IMAGES} from '@project/images';
import Header from './Header';
import StatusBox from './StatusBox';
import MenuBox from './MenuBox';
import BackgroundContainer from '@components/Layout/BackgroundContainer';

const HomeScreen = () => {
  return (
    <BackgroundContainer>
      <Header />
      <StatusBox />
      <MenuBox />
    </BackgroundContainer>
  );
};

export default HomeScreen;
