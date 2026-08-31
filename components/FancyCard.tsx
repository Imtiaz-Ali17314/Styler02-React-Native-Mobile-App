import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5e/84/76/count-the-jeeps-on-lake.jpg?w=1200&h=700&s=1',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Naran Lake</Text>
          <Text style={styles.cardLabel}>Naran Kaghan Velley, Pakistan</Text>
          <Text style={styles.cardDescription}>
            Naran Kaghan Valley is a famous alpine valley located in the
            Mansehra District of Khyber Pakhtunkhwa, northern Pakistan.
          </Text>
          <Text style={styles.cardFooter}>12 min ago</Text>
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

  card: {
    width: 378,
    height: 370,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  cardElevated: {
    backgroundColor: '#eee',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  cardImage: {
    height: 220,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardLabel: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 12,
    color: '#222',
    marginBottom: 12,
    marginTop: 4,
  },

  cardFooter: {
    fontSize: 14,
  },
});
