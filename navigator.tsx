import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, LoginScreen, FriendsStatusesScreen} from '@project/screens';
import {SCREENS} from '@utils/constants';
import CustomBottomTabBar from '@components/CustomButtomTabBar';

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
    <BottomTabStack.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTabStack.Screen name={SCREENS.HOME} component={HomeScreen} />
      {/* <BottomTabStack.Screen
        name={SCREENS.FRIENDS}
        component={FriendsStatusesScreen}
      /> */}
    </BottomTabStack.Navigator>
  );
}
