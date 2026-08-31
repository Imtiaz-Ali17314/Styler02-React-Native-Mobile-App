import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View>
      <Text style={[styles.headingText, { color: textColor }]}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={[{ color: textColor }]}>Red</Text>
        </View>

        <View style={[styles.card, styles.card2]}>
          <Text style={[{ color: textColor }]}>Green</Text>
        </View>

        <View style={[styles.card, styles.card3]}>
          <Text style={[{ color: textColor }]}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  container: {},

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },

  card1: {
    backgroundColor: '#EF5354',
  },

  card2: {
    backgroundColor: '#50DBB4',
  },

  card3: {
    backgroundColor: '#5DA3FA',
  },
});
