import {BOTTOM_TAB_IMAGES} from '@project/images';
import {Image, Pressable, Text, View} from 'react-native';

const BottomTabButton = (props: any) => {
  const SIZE = 32;
  const tabIcon = `${props.label}${props.isFocused ? 'Active' : 'Inactive'}`;

  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: 'red',
          borderRadius: 10,
          padding: 5,
          aspectRatio: 1 / 1,
          alignItems: 'center',
        }}>
        <Image
          style={{width: SIZE, height: SIZE}}
          source={BOTTOM_TAB_IMAGES[tabIcon]}
        />
        <Text
          style={{color: 'white', textTransform: 'capitalize', marginTop: 5}}>
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

export default BottomTabButton;
