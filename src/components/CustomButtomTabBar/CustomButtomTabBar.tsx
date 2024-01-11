import {View} from 'react-native';
import BottomTabButton from './BottomTabButton';
import {ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {applicationActions} from '@store/slices/application';

interface CustomBottomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  style?: ViewStyle;
}

const CustomBottomTabBar: React.FC<CustomBottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  style,
}) => {
  const dispatch = useDispatch();
  const {screenIndex} = useSelector(
    (ReducerState: any) => ReducerState.applicationReducer,
  );

  return (
    <View
      style={[
        {
          backgroundColor: '#080871',
        },
        style,
      ]}>
      {state.routes.map((route: any, index: Number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = screenIndex === index;

        const onPress = () => {
          // const event = navigation.emit({
          //   type: 'tabPress',
          //   target: route.key,
          //   canPreventDefault: true,
          // });

          if (!isFocused) {
            dispatch(applicationActions.setScreenIndex(index));
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          // navigation.emit({
          //   type: 'tabLongPress',
          //   target: route.key,
          // });
          return;
        };

        return (
          <BottomTabButton
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;
