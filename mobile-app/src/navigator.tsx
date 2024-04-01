import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, LoginScreen} from '@project/screens';
import {SCREENS} from '@utils/constants';
import FriendStatusesScreen from '@screens/FriendsScreen/FriendsScreen';

const Stack = createStackNavigator();
const BottomTabStack = createBottomTabNavigator();

export function UnloggedStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export function LoggedStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <BottomTabStack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <BottomTabStack.Screen name={SCREENS.MAIL} component={HomeScreen} />
      <BottomTabStack.Screen name={SCREENS.CAMERA} component={HomeScreen} />
      <BottomTabStack.Screen
        name={SCREENS.FRIENDS}
        component={FriendStatusesScreen}
      />
    </Stack.Navigator>
  );
}
