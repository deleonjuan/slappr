import {CONSTS} from '@utils/constants';
import React from 'react';
import {Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface PostCardProps {
  item: {
    message: string;
    mood: string;
    emoji: string;
    userId: string;
    username: string;
  };
  isOwners: boolean;
}

const PostCard: React.FC<PostCardProps> = ({item, isOwners}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.statusBoxContainer}>
      <View style={styles.messageContainer}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[styles.textBig, styles.name]}>{`${item.username}`}</Text>
          <Text style={[styles.textNormal, styles.moodLabel]}>
            {isOwners && '(you)'}
          </Text>
        </View>
        <Text style={[styles.textNormal, styles.message]}>{item.message}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.textNormal, styles.moodLabel]}>
          {CONSTS.STATUS_BOX.MOOD}=
        </Text>
        <Text style={[styles.textBig, styles.mood, {marginLeft: 5}]}>
          {item.mood}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: 15,
            top: -30,
          }}>
          <Text style={{color: 'white', fontSize: 50}}>{item.emoji}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const stylesheet = createStyleSheet(theme => ({
  statusBoxContainer: {
    borderRadius: 10,
    marginHorizontal: {
      portrait: 10,
      landscape: 0,
    },
    marginVertical: {
      portrait: 0,
      landscape: 20,
    },
    borderWidth: 5,
    borderBottomWidth: 7,
    borderColor: theme.colors.red01,
    display: 'flex',
  },
  messageContainer: {
    backgroundColor: theme.colors.skyBlue01,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  statusContainer: {
    backgroundColor: theme.colors.skyBlue02,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textBig: {fontWeight: 'bold', fontSize: 30},
  textNormal: {fontWeight: 'bold', fontSize: 20},
  name: {color: theme.colors.victoriusBlue},
  message: {color: 'black', height: '100%', verticalAlign: 'top'},
  moodLabel: {color: theme.colors.red01},
  mood: {color: theme.colors.victoriusPurple, flex: 1, padding: 0},
}));
