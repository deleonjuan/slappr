import BackgroundContainer from '@components/Layout/BackgroundContainer';
import BottomTabNav from '@components/Layout/BottomTabNav';
import {beApiEndpoints} from '@store/apis/beApi';
import {Text, FlatList, Pressable, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import PostCard from './PostCard';
import {useSelector} from 'react-redux';

const FriendStatusesScreen = () => {
  const {styles} = useStyles(stylesheet);
  const {userId} = useSelector((state: any) => state.authReducer);
  const {data, isLoading, refetch} = beApiEndpoints.useGetPostsQuery({});

  const getPostsFromApi = () => {
    refetch();
  };

  return (
    <BackgroundContainer>
      <BottomTabNav>
        <View style={styles.container}>
          {!isLoading && (
            <FlatList
              data={data}
              keyExtractor={post => post.id}
              renderItem={({item}) => (
                <PostCard item={item} isOwners={item.userId === userId} />
              )}
              ItemSeparatorComponent={() => (
                <View style={{marginVertical: 6}} />
              )}
              ListHeaderComponent={() => (
                <Pressable
                  onPress={getPostsFromApi}
                  style={styles.updateButtonContainer}>
                  <Text style={styles.updateButton}>UPDATE</Text>
                </Pressable>
              )}
            />
          )}
        </View>
      </BottomTabNav>
    </BackgroundContainer>
  );
};

export default FriendStatusesScreen;

const stylesheet = createStyleSheet(theme => ({
  updateButton: {
    backgroundColor: theme.colors.red01,
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: theme.colors.yellow01,
    fontSize: 20,
  },
  updateButtonContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: {
      portrait: 'column',
      landscape: 'row',
    },
    paddingRight: {
      portrait: 0,
      landscape: 10,
    },
  },
}));
