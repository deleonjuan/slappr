import React from 'react';
import {LoggedStack, UnloggedStack} from './navigator';
import {NavigationContainer} from '@react-navigation/native';

import {UnistylesRegistry} from 'react-native-unistyles';
import {myTheme} from '@utils/theme';
import {Provider, useSelector} from 'react-redux';
import store, {persistor} from '@store/index';
import {PersistGate} from 'redux-persist/integration/react';

const Auth = () => {
  const {token} = useSelector((state: any) => state.authReducer);
  return <>{token ? <LoggedStack /> : <UnloggedStack />}</>;
};

function App(): React.JSX.Element {
  UnistylesRegistry.addThemes({
    myTheme: myTheme,
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
