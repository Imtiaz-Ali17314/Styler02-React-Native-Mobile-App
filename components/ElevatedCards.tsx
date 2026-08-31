import {
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

  return (
    <View>
      <Text style={[styles.headingText, { color: textColor }]}>
        ElevatedCards
      </Text>

      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
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
    borderRadius: 4,
    margin: 8,
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
