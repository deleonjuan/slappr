import BottomTabButton from './BottomTabButton';
import {ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {applicationActions} from '@store/slices/application';
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient colors={['#000000', '#080871']} style={[style]}>
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
    </LinearGradient>
  );
};

export default CustomBottomTabBar;
