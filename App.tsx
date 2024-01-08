import React from 'react';
import {LoggedStack, UnloggedStack} from './navigator';
import {NavigationContainer} from '@react-navigation/native';

import {UnistylesRegistry} from 'react-native-unistyles';
import {myTheme} from '@utils/theme';

function App(): React.JSX.Element {
  const token = null;

  UnistylesRegistry.addThemes({
    myTheme: myTheme,
  });

  return (
    <NavigationContainer>
      {token ? <LoggedStack /> : <UnloggedStack />}
    </NavigationContainer>
  );
}
export default App;
