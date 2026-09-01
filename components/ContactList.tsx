import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      status: 'Available',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'Busy',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      status: 'Away',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 4,
      name: 'Bob Williams',
      status: 'Available',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 5,
      name: 'Carol Brown',
      status: 'Busy',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 6,
      name: 'David Davis',
      status: 'Away',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.scrollContainer}>
        {contacts.map(({ id, name, status, avatar }) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: avatar,
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
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
  scrollContainer: {},
  userCard: {},
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  userName: {},
  userStatus: {},
});
