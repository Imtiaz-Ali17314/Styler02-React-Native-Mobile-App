import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? '#fff' : '#000';

  const avatars = [
    {
      id: 1,
      avatar: 'https://picsum.photos/seed/avatar1/200/200',
    },
    {
      id: 2,
      avatar: 'https://picsum.photos/seed/avatar2/200/200',
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/seed/avatar3/200/200',
    },
    {
      id: 4,
      avatar: 'https://picsum.photos/seed/avatar4/200/200',
    },
    {
      id: 5,
      avatar: 'https://picsum.photos/seed/avatar5/200/200',
    },
    {
      id: 6,
      avatar: 'https://picsum.photos/seed/avatar6/200/200',
    },
    {
      id: 7,
      avatar: 'https://picsum.photos/seed/avatar7/200/200',
    },
    {
      id: 8,
      avatar: 'https://picsum.photos/seed/avatar8/200/200',
    },
    {
      id: 9,
      avatar: 'https://picsum.photos/seed/avatar9/200/200',
    },
    {
      id: 10,
      avatar: 'https://picsum.photos/seed/avatar10/200/200',
    },
    {
      id: 11,
      avatar: 'https://picsum.photos/seed/avatar11/200/200',
    },
    {
      id: 12,
      avatar: 'https://picsum.photos/seed/avatar12/200/200',
    },
    {
      id: 13,
      avatar: 'https://picsum.photos/seed/avatar13/200/200',
    },
    {
      id: 14,
      avatar: 'https://picsum.photos/seed/avatar14/200/200',
    },
    {
      id: 15,
      avatar: 'https://picsum.photos/seed/avatar15/200/200',
    },
  ];

  return (
    <View>
      <Text style={[styles.headingText, { color: textColor }]}>
        ElevatedCards
      </Text>

      <ScrollView style={styles.container} horizontal={true}>
        {avatars.map(({ id, avatar }) => (
          <View key={id} style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: avatar }} style={styles.cardImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  container: {
    padding: 8,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,

    borderColor: 'transparent',
    borderRightColor: '#f72f6e',
    borderTopColor: '#f72f6e',
    borderBottomColor: '#f72f6e',

    margin: 8,
  },

  cardImage: {
    height: 94,
    width: 94,
    borderRadius: 94 / 2,
  },

  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
});
